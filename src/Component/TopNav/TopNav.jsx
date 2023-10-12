import React from "react";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function TopNav({ title, onOpen }) {
  return (
    <Box boxShadow="xl" px="4" justifyContent="space-around" bg="white">
      <HStack w="1200px" mx="auto" height="64px" justifyContent="space-between">
        <Icon
          display={{
            base: "block",
            lg: "none",
          }}
          as={FaBars}
          cursor="pointer"
          onClick={onOpen}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="40px" as={FaUserCircle} />
          </MenuButton>
          <MenuList>
            <MenuItem>Transaction</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
