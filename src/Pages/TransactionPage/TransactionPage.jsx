import React from "react";
import DashboardLayout from "../../Component/DashboardLayout/DashboardLayout";
import { CustomCard } from "../../Chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { color } from "framer-motion";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";
import { AiOutlineSearch } from "react-icons/ai";
export default function TransactionPage() {
  const tabsData = [
    {
      name: "All",
      count: "423",
    },
    {
      name: "Deposit",
      count: "13",
    },
    {
      name: "Withdraw",
      count: "343",
    },
    {
      name: "Trade",
      count: "31",
    },
  ];
  return (
    <>
      <DashboardLayout title="Transaction">
        <Flex justify="flex-end" mb="12px" mt="24px">
          <Button
            bgColor="#5F00D9"
            color="#fff"
            leftIcon={<Icon as={AiOutlineDownload} />}
            _hover={{
              bgColor: "#059669",
              color: "#fff",
            }}
          >
            Export Csv
          </Button>
        </Flex>
        <CustomCard>
          <Tabs>
            <TabList display="flex" justifyContent="space-between">
              <HStack>
                {tabsData.map((item) => (
                  <Tab display="flex" gap="2">
                    {item.name}
                    <Tag>{item.count}</Tag>
                  </Tab>
                ))}
              </HStack>
              <InputGroup w="171px" h="18px" gap="2" mb="10px">
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineSearch} />
                </InputLeftElement>
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CustomCard>
      </DashboardLayout>
    </>
  );
}
