import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  MenuButton,
  Spacer,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import Logo from './Logo';
import MainList from './MainList';

export default function Navbar() {
  const [size, setSize] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    setSize('lg');
    onOpen();
  };

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        paddingX="4"
        paddingY="6"
        gap="2"
        className="container"
      >
        <Box p="2">
          <Heading size="lg">Tanemin</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button onClick={() => handleClick()} key={size} m={4}>
            <HamburgerIcon />
          </Button>
        </ButtonGroup>
      </Flex>

      <Drawer onClose={onClose} placement={'left'} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tanemin Menu</DrawerHeader>
          <DrawerBody>
            <MainList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
