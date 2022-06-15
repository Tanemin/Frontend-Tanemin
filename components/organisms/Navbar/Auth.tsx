/* eslint-disable @next/next/link-passhref */
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { getUserData } from '../../../services/auth';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    name: '',
    picture: '',
  });

  const getUser = useCallback(async () => {
    const data = await getUserData();
    setUserData(data);
  }, []);

  useEffect(() => {
    getUser();

    if (Cookies && Cookies.get('token')) {
      setIsLogin(true);
    }
  }, [getUser]);

  if (!isLogin) {
    return (
      <>
        <Link href={'/signin'}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/signin'}
          >
            Sign In
          </Button>
        </Link>
        <Link href={'/signup'}>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button>
        </Link>
      </>
    );
  }
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href={'/dashboard'}>
              <a>{userData.fullname}</a>
            </Link>
          </MenuItem>
          <MenuItem>Link 2</MenuItem>
          <MenuDivider />
          <MenuItem>Link 3</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
