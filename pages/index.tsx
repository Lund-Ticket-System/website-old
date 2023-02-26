import { Inter } from "next/font/google";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LABB - Kommer snart</title>
        <meta
          name="description"
          content="Lunds Akademiska Biljettbyrå, biljettsystemet designat för studenter av studenter."
        />
      </Head>
      <Box bg="primary.500">
        <Container maxW="container.xl">
          <VStack
            h="100vh"
            display="flex"
            justifyContent="center"
            justifyItems="center"
            textAlign="center"
          >
            <Heading
              as="h1"
              fontSize={["8xl", "9xl"]}
              color="accent.500"
              letterSpacing="0.2rem"
            >
              LABB
            </Heading>
            <Text color="accent.500" fontSize="2xl">
              kommer snart
            </Text>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
