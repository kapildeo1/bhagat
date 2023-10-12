import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function PortfolioSection() {
  return (
    <HStack
      bg="#FFF"
      borderRadius="16px"
      p="24px"
      boxShadow="xl"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
    >
      <Stack>
        <HStack fontSize="16px" fontWeight="medium">
          <Text color="#535D66" fontSize="14px">
            Total Portfolio Value
          </Text>
          <Icon as={AiFillInfoCircle} />
        </HStack>
        <Text fontSize="24px">₹ 112,312.24</Text>
      </Stack>

      <Stack
        ml={{
          xl: "64px",
          base: "0px",
        }}
      >
        <HStack fontSize="16px" font-weight="medium">
          <Text fontSize="14px" color="#535D66">
            Wallet Balances
          </Text>
        </HStack>
        <HStack>
          <HStack>
            <Text fontSize="24px">22.39401000</Text>
            <Tag>BTC</Tag>
          </HStack>
          <HStack ml="32px">
            <Text fontSize="24px">₹ 1,300.00</Text>
            <Tag>INR</Tag>
          </HStack>
        </HStack>
      </Stack>

      <HStack
        ml={{
          xl: "113px",
          base: "0px",
        }}
        direction="row"
        spacing={4}
      >
        <Button
          w="120px"
          h="38px"
          bg="#5F00D9"
          color="white"
          _hover={{
            bgColor: "#059669",
            color: "#fff",
          }}
        >
          Deposit
        </Button>
        <Button
          w="120px"
          h="38px"
          bg="#5F00D9"
          color="white"
          _hover={{
            bgColor: "#059669",
            color: "#fff",
          }}
        >
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}
