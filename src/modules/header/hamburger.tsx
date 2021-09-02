import { Box } from '@chakra-ui/react';

interface IHamburgerProps {
  onClick: () => void;
}
// { onClick }: IHumburgerProps
export const Hamburger = ({ onClick }: IHamburgerProps) => {
  return (
    <Box onClick={onClick}>
      <Box w='10' h='2' bgColor='black' my='1' />
      <Box w='10' h='2' bgColor='black' my='1' />
      <Box w='10' h='2' bgColor='black' my='1' />
    </Box>
  );
};
