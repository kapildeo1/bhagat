import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
export default function TransactionTable() {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Completed: "#059669",
    Cancelled: "#DC2626",
  };
  return (
    <>
      <TableContainer>
        <Table bg="#EEEEF4" variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item) => (
              <Tr key={item.id}>
                <Td my="16px" fontSize="14px" fontWeight="700">
                  {item.id}
                </Td>
                <Td my="16px">
                  <Stack>
                    <Text fontSize="14px" fontWeight="700">
                      {item.date}
                    </Text>
                    <Text fontSize="12px" fontWeight="300" color="#797E82">
                      {item.time}
                    </Text>
                  </Stack>
                </Td>
                <Td my="16px">
                  <Stack>
                    <Text fontSize="14px" fontWeight="700">
                      {item.type.name}
                    </Text>
                    <Text fontSize="12px" fontWeight="300" color="#797E82">
                      {item.type.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td my="16px" fontSize="14px" fontWeight="700">
                  {item.amount}
                </Td>
                <Td my="16px" fontSize="14px" fontWeight="700">
                  <Tag
                    color="#fff"
                    my="4px"
                    mx="6px"
                    borderRadius="20px"
                    bg={statusColor[item.status]}
                  >
                    {item.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
