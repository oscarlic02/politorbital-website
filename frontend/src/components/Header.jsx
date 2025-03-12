import {
  Flex,
  Text,
  Box,
  HStack,
  Button,
  Link,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { getColors } from "../utils/utils";

/**
 * Header component that displays a navigation bar with links and a contact button.
 *
 * The header includes:
 * - A logo with the text "POLITORBITAL".
 * - Navigation links for desktop view.
 * - A contact button for desktop view.
 * - A mobile menu button that opens a drawer with navigation links and a contact button.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <Header />
 * )
 *
 * @returns {JSX.Element} The rendered header component.
 */ const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Meet us", href: "/meet-us" },
    { name: "Projects", href: "/projects" },
    { name: "Outreach", href: "/outreach" },
    { name: "Apply", href: "/apply" },
    { name: "Work with us", href: "/work-with-us" },
  ];

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px={{ base: 4, md: 6 }}
      py={4}
      bg="rgba(0, 0, 0, 0.5)" 
      backdropFilter="blur(8px)"
      borderBottom="1px solid rgba(255,255,255,0.1)"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
    >
      {/* Logo */}
      <Text color="white" fontWeight="bold" fontSize="lg" letterSpacing="wider">
        POLITORBITAL
      </Text>

      {/* Desktop Navigation Links */}
      <HStack spacing={8} display={{ base: "none", md: "flex" }}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            color="white"
            fontSize="sm"
            fontWeight="medium"
            _hover={{ color: "rgba(255,255,255,0.8)" }}
            textDecoration="none"
          >
            {item.name}
          </Link>
        ))}
      </HStack>

      {/* Contact Button - Desktop */}
      <Button
        colorScheme="blue"
        variant="solid"
        backgroundColor={getColors().applyButton}
        rounded={"full"}
        size="md"
      >
        Contact us
      </Button>

      {/* Mobile Menu Button */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        variant="ghost"
        color="white"
        icon={
          <Box>
            <Box
              as="span"
              display="block"
              w="24px"
              h="2px"
              bg="white"
              mb="5px"
            />
            <Box
              as="span"
              display="block"
              w="24px"
              h="2px"
              bg="white"
              mb="5px"
            />
            <Box as="span" display="block" w="24px" h="2px" bg="white" />
          </Box>
        }
        onClick={onOpen}
      />

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerContent bgGradient="linear(to-b, #001324, #000810)">
          <DrawerCloseButton color="white" size="lg" mt={2} />
          <DrawerBody>
            <VStack spacing={8} align="center" justify="center" h="full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  color="white"
                  fontSize="xl"
                  fontWeight="medium"
                  _hover={{ color: "rgba(255,255,255,0.8)" }}
                  textDecoration="none"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Button - Mobile */}
              <Button
                borderRadius="full"
                px={8}
                py={6}
                mt={4}
                fontSize="md"
                fontWeight="medium"
                color="black"
                height="auto"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-2px)",
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                  borderRadius: "full",
                  bgGradient: `linear(to-r, ${getColors.primary}, ${getColors.secondary})`,
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "1px",
                  right: "1px",
                  bottom: "1px",
                  left: "1px",
                  zIndex: -1,
                  borderRadius: "full",
                  bgGradient: `linear(to-r, ${getColors.black}, ${getColors.primary})`,
                }}
                onClick={onClose}
              >
                Contact us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
