import { Box, Container, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Header1, Paragraph1, List1 } from "@/components/CustomText";
import { headers, paragraphs, lists } from "@/assets/text";

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
            <Box pb={8} px={{ base: 0, sm: 8 }}>
              <VStack>
                <Flex
                  flexDir="column"
                  justifyContent="center"
                  height="calc(100vh - 3rem)"
                  alignItems="center"
                >
                  <Heading
                    as="h1"
                    fontSize={["8xl", "9xl"]}
                    color="accent.500"
                    letterSpacing="0.2rem"
                  >
                    LABB
                  </Heading>
                  <Text fontSize={["2xl", "3xl"]} color="accent.500">
                    Kommer snart
                  </Text>
                </Flex>
                <Description />
              </VStack>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

function Description() {
  return (
    <Box pb={4} px={{ base: 4, sm: 12 }} rounded={10} bg="accent.500">
      <Header1 text={headers[0]} />
      <Paragraph1 text={paragraphs[0]} />

      <Header1 text={headers[1]} />
      <Paragraph1 text={paragraphs[1]} />

      <Header1 text={headers[2]} />
      <Paragraph1 text={paragraphs[2]} />

      <Header1 text={headers[3]} />
      <Paragraph1 text={paragraphs[3]} />
      <List1 list={lists[0]} />

      <Header1 text={headers[4]} />
      <Paragraph1 text={paragraphs[4]} />
      <List1 list={lists[1]} />
      <Paragraph1 text={paragraphs[5]} />
    </Box>
  );
}
