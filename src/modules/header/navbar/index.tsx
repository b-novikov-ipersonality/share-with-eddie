import { Flex } from '@chakra-ui/react';
import { INavbarItem } from '../header';

export const Navbar = ({ navbarItems }: { navbarItems: INavbarItem[] }) => {
  return (
    <Flex
      flexDir={{
        base: 'column', // 0px 400px (min-width: 0px) and (max-width: 400px),
        sm: 'column-reverse', // (min-width: 400px)
        lg: 'row',
      }}
    >
      {navbarItems.map(({ url, label }, index) => (
        <a key={index} href={url}>
          {label}
        </a>
      ))}
    </Flex>
  );
};
//
