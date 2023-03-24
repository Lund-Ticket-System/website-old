import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layout";

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
      <Layout>
        <Box bg="primary.500">
          <Container maxW="container.xl">
            <VStack
              h="calc(100vh - 3rem)"
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
      </Layout>
    </>
  );
}
