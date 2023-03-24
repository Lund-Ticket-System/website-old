import { Box, Flex, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Flex minH="100vh" w="100%" flexDir="column">
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  );
}
