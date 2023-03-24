import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Head>
        <title>LABB - Kontakta oss</title>
        <meta
          name="description"
          content="Kontakta oss på Lunds Akademiska Biljettbyrå, biljettsystemet designat för studenter av studenter."
        />
      </Head>

      <Layout>
        <Box bg="primary.500">
          <Container maxW="container.xl">
            <VStack
              h="calc(30vh - 3rem)"
              display="flex"
              justifyContent="center"
              justifyItems="center"
              textAlign="center"
            >
              <Heading
                as="h1"
                fontSize={["6xl", "7xl"]}
                color="accent.500"
                letterSpacing="0.2rem"
              >
                Kontakta oss
              </Heading>
            </VStack>
          </Container>
        </Box>
        <Box>
          <Container maxW="container.sm" py="1rem" fontSize="xl">
            <Text>
              Tveka inte att kontakta oss via vår Facebook-sida om du har några
              frågor, vill engagera dig i föreningen eller om du är en
              studentorganisation som vill samarbeta med oss. Tillsammans kan vi
              fortsätta att göra Lunds studentliv ännu mer tillgängligt och
              spännande för alla!
            </Text>
            <VStack p="1rem" spacing="1rem">
              <a href="mailto:info@labbs.se">
                <Button
                  size="lg"
                  colorScheme="primary"
                  textColor="accent.500"
                  leftIcon={<MdMail />}
                >
                  E-post
                </Button>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091051603614"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  colorScheme="facebook"
                  size="lg"
                  leftIcon={<FaFacebook />}
                >
                  Facebook
                </Button>
              </a>
            </VStack>
          </Container>
        </Box>
      </Layout>
    </>
  );
}
