import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { PlantTypes } from '../../../services/data-types';
import { getPlants } from '../../../services/plant-list';
import SearchItem from '../../molecules/SearchItem';

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [plantList, setPlantList] = useState([]);
  const [saveQuery, setSaveQuery] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');

  const filterHanlder = (event: any) => {
    setFilterQuery(event.target.value);
    const dataFiltered = saveQuery.filter((item: PlantTypes) => {
      return item.plantName.toLowerCase().includes(filterQuery.toLowerCase());
    });
    setPlantList(dataFiltered);
  };

  const getPlantListItem = useCallback(async () => {
    try {
      const data = await getPlants();
      setSaveQuery(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPlantListItem();
  }, [getPlantListItem]);

  return (
    <>
      <SearchIcon onClick={onOpen} cursor="pointer" />
      <Drawer size={'lg'} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cari sesuatu</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Cari disini..." onChange={filterHanlder} />
            <SearchItem plants={plantList} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Cari</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Search;
