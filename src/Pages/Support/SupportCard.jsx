import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { CustomCard } from "../../Chakra/CustomCard";
import InfoCard from "../Dashboard/Component/InfoCard";

export default function SupportCard() {
  return (
    <>
      <Stack>
        <Flex gap="6">
          <Stack>
            <Icon w="24px" h="24px" color="#5F00D9" as={AiFillMail} />
            <Text fontSize="32px" font-weight="700">
              Contact Us
            </Text>
            <Text fontSize="14px" font-weight="300">
              Have a question or just want to know more? Feel free to reach out
              to us.
            </Text>
          </Stack>
          <CustomCard p="6">
            <Text>
              You will receive response within 24 hours of time of submit.
            </Text>
            <HStack>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder="Enter a name" />
              </FormControl>
              <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input type="name" placeholder="Enter a Surname" />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter a email" />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Textarea type="message" placeholder="Enter a message" />
            </FormControl>
            <Checkbox my="12px" defaultChecked>
              I agree with{" "}
              <span color="#5F00D9" fontSize="12px">
                Terms & Conditions.
              </span>
            </Checkbox>
            <Stack>
              <Button bg="#D8DDE2" color="#000">
                Send a Message
              </Button>
              <Button bg="#EEEEF4" color="#000">
                Book a Meeting
              </Button>
            </Stack>
          </CustomCard>
        </Flex>
        <Flex gap="6" mt="80px">
          <Stack>
            <Icon w="24px" h="24px" color="#5F00D9" as={AiFillMail} />
            <Text fontSize="32px" font-weight="700">
              Contact Us
            </Text>
            <Text fontSize="14px" font-weight="300">
              Have a question or just want to know more? Feel free to reach out
              to us.
            </Text>
          </Stack>
          <InfoCard
            inverted={true}
            name="contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </Flex>
      </Stack>
    </>
  );
}
