import React from "react";
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { PiSquaresFourLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
export default function SideNav() {
  const navLinks = [
    {
      icon: PiSquaresFourLight,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      bg="white"
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
    >
      <Box>
        <Heading
          ml="28px"
          mr="42px"
          as="h1"
          textAlign="center"
          pt="54px"
          fontSize="18px"
        >
          @DOSOMECODING
        </Heading>
        <Box mx="12px" mt="28px">
          {navLinks.map((item) => (
            <Link to={item.link} key={item.text}>
              <HStack
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                  fontWeight: "bolder",
                }}
                py="16px"
                px="12px"
                cursor="pointer"
                borderRadius="10px"
                color="#797E82"
              >
                <Icon as={item.icon} />
                <Text fontSize="14px" fontWeight="medium" color="#797E82">
                  {item.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="12px" mb="20px">
        <Link to="/support">
          <HStack
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
              fontWeight: "bolder",
            }}
            py="16px"
            px="12px"
            cursor="pointer"
            borderRadius="10px"
          >
            <Icon as={FcCustomerSupport} />
            <Text fontSize="14px" fontWeight="medium" color="#797E82">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
}
