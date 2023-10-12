import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function PriceSection() {
  const timestamps = ["2.33 PM", "4.23 PM", "5.10 PM", "10.33 PM", "12.03 PM"];
  return (
    <CustomCard>
      {/* Pricing and Buttons */}
      <Flex mb="48px" justifyContent="space-between" align="start">
        <Stack>
          <HStack fontSize="16px" fontWeight="medium">
            <Text fontSize="14px" color="#535D66">
              Current Price
            </Text>
          </HStack>
          <HStack>
            <HStack>
              <Text fontSize="24px">₹26,670.25</Text>
              <HStack>
                <Icon color="#059669" as={BsArrowUpRight} />
                <Text color="#059669" fontSize="14px">
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack direction="row" spacing={4}>
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
      </Flex>
      {/* Tabs  */}
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justifyContent="end">
          <TabList bg="#F3F3F7" p="3px">
            {["1M", "1H", "1D", "1W"].map((item) => (
              <Tab
                _selected={{ bg: "#fff" }}
                borderRadius="4px"
                py="4px"
                px="3px"
              >
                {item}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            {/* Images */}
            <Image src="/graph.svg" w="100%" />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Timimngs */}
      <HStack spacing="14">
        {timestamps.map((item) => (
          <Text fontSize="14px">{item}</Text>
        ))}
      </HStack>
    </CustomCard>
  );
}
