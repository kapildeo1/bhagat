import React, { Fragment } from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Button, Divider, Flex, Grid, Stack, Text } from "@chakra-ui/react";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { SiBitcoinsv } from "react-icons/si";
// import { icons } from "react-icons/lib";
export default function Transaction() {
  const transactionData = [
    {
      id: "1",
      // icon: AiFillDollarCircle,
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
    {
      id: "2",
      // icon: SiBitcoinsv,
      title: "BTC Sell",
      date: "2022-05-27 12:32 PM",
      amount: "- 12.48513391 BTC",
    },
    {
      id: "3",
      // icon: AiFillDollarCircle,
      title: "INR Deposit",
      date: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
  ];
  return (
    <CustomCard>
      <Text fontSize="14px" color="#535D66">
        Recent Transactions
      </Text>

      <Stack mt="24px">
        {transactionData.map((item, i) => (
          <Fragment key={item.id}>
            {i !== 0 && <Divider mt="4" mb="4" />}
            <Flex gap="16px">
              <Grid
                borderRadius="full"
                boxSize="10"
                bg="#F3F3F7"
                placeItems="center"
              >
                {/* <Icon fontSize="25px" as={item?.icon} /> */}
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack>
                  <Text fontSize="16px" color="#171717">
                    {item.title}
                  </Text>
                  <Text fontSize="14px" color="#797E82">
                    {item.date}
                  </Text>
                </Stack>
                <Text>{item.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button
        w="full"
        backgroundColor="#EEEEF4"
        color="#171717"
        borderRadius="16px"
        marginTop="27px"
      >
        View All
      </Button>
    </CustomCard>
  );
}
