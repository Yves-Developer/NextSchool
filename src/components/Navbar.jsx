import { Flex, Link, Box, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex gap={4} justify="space-between" p={4}>
      <Box>
        <Text>NextSchool</Text>
      </Box>
      <Box display="flex" gap={4}>
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
