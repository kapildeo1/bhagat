import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SideNav from "../SideNav/SideNav";
import TopNav from "../TopNav/TopNav";
import SideModal from "../SideModal/SideModal";

export default function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <SideNav />
        </Box>
        <SideModal isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            overflowY="auto"
            h="calc(100vh-64px)"
            maxW="1200px"
            mt="50px"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}
