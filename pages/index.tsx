import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Description from "@/components/Desciption";

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
            <Box py={8} px={{ base: 0, sm: 8 }}>
              <VStack
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
                  py={32}
                >
                  LABB
                </Heading>
                <Description />
              </VStack>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
}
