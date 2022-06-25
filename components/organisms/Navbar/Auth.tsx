/* eslint-disable @next/next/link-passhref */
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { getUserData } from '../../../services/auth';
import { useRouter } from 'next/router';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const [userData, setUserData] = useState({
    fullname: '',
    avatar: '',
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

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  if (!isLogin) {
    return (
      <>
        <Link href={'/signin'}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'solid'}
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
            colorScheme={'teal'}
            _hover={{
              bg: 'green.600',
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
          <Avatar size={'sm'} src={userData.avatar} />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href={'/member'}>
              <Text>Profile</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={'/member/edit'}>
              <Text>Setting</Text>
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
