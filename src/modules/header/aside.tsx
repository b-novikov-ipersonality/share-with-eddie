import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FC } from 'react';

interface IAsideProps {
  heading?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Aside: FC<IAsideProps> = ({ children, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

/**
 * <Aside>
 *  elements
 * </Aside>
 *
 *
 */

// Drawer
// DrawerOverlay
// DrawerContent -> DrawerHeader DrawerBody and DrawerFooter
// DrawerCloseButton
