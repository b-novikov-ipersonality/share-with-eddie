import ImageSrc from '@assets/images/header/logo.png';
import { Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Aside } from './aside';
import { Hamburger } from './hamburger';
import { Navbar } from './navbar';

export interface INavbarItem {
  url: string;
  label: string;
}

const navbarItems: INavbarItem[] = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/our-psychologists',
    label: 'Our psychologists',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/contacts',
    label: 'Contacts',
  },
  // {
  //   url: '/',
  //   label: 'Home',
  // },
  // {
  //   url: '/',
  //   label: 'Home',
  // },
];

export const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex color={'blue.500'} justifyContent='space-between'>
      <NextImage src={ImageSrc} />
      <div>
        {isMobile ? (
          <>
            <Hamburger onClick={onOpen} />
            <Aside isOpen={isOpen} onClose={onClose}>
              <Navbar navbarItems={navbarItems} />
            </Aside>
          </>
        ) : (
          <Navbar navbarItems={navbarItems} />
        )}
      </div>
    </Flex>
  );
};
