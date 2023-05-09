import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { MdMail } from "react-icons/md";

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>LABB - Integritetspolicy</title>
      <meta
        name="description"
        content="Integritetspolicy för Lunds Akademiska Biljettbyrå"
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
              Integritetspolicy
            </Heading>
          </VStack>
        </Container>
      </Box>
      <Box>
        <Container maxW="container.md" py="1rem" fontSize="lg">
          <Text>
            Privacy Policy for Lunds Akademiska Biljettbyrå (LABB). At LABB, we
            are committed to protecting the privacy of our users. The Privacy
            Policy describes how we collect, use, and share information about
            you when you use our website and mobile application.
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Information We Collect
            </Heading>
            <VStack mt="1rem" spacing="1rem" alignItems="left">
              <Text>
                We collect information when you use our services. This includes:
              </Text>
              <Text>
                Personal Information: When you create an account with us, we
                collect your name and email address. If you purchase a ticket
                through our Services, our payment provider (
                <Text as="span" color="blue.500">
                  <a href="https://stripe.com" target="_blank" rel="noreferrer">
                    Stripe
                  </a>
                </Text>
                ) collects your payment information, which may include your
                credit card number and billing address. We do not store your
                credit card, but you have the option to save it for future
                purchases.
              </Text>
              <Text>
                Usage Information: We collect information about how you use our
                services, such as the pages you visit and the features you use.
                We may also collect information about your device, such as your
                device type, operating system, and what browser you are using.
              </Text>
              <Text>
                Location Information: If granted permission, we may collect your
                device&apos;s location information to provide you with relevant
                content and services.
              </Text>
            </VStack>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              How We Use Your Information
            </Heading>
            <VStack mt="1rem" spacing="1rem" alignItems="left">
              <Text>
                We use your information to provide and improve our services, as
                well as for other purposes, such as:
              </Text>
              <Text>
                Analytics: Collecting information to analyze how our services
                are used, such as by measuring the effectiveness of our
                marketing campaigns, improving the user experience and locating
                app crashes.
              </Text>
            </VStack>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              How We Share Your Information
            </Heading>
            <VStack mt="1rem" spacing="1rem">
              <Text>
                We do not sell your information to third party vendors. However,
                we may share your information with third party vendors for
                various purposes, such as:
              </Text>
              <Text>
                Service Providers: We may share your information with
                third-party service providers who help us provide and improve
                our services, such as payment processors and marketing partners.
              </Text>
              <Text>
                Nationer/Sektioner: If you are a member of a Nation/Sektion or
                have followed or purchased an event from them, we may share
                certain information about you with them.
              </Text>
              <Text>
                Analytics: We may share your information with analytics
                providers to help us improve our Services.
              </Text>
              <Text>
                Legal Requirements: We may share your information if we are
                required to do so by law or if we believe such action is
                necessary to comply with law or to protect the rights, property,
                or safety of our users or others.
              </Text>
            </VStack>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Delete Your Information
            </Heading>
            <Box mt="1rem">
              <Text>
                You can delete your account at any time by contacting us at{" "}
                <Text as="span" color="blue.500">
                  <a href="mailto:info@labbs.se">info@labbs.se</a>
                </Text>
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Security
            </Heading>
            <Box mt="1rem">
              <Text>
                We value our users&apos; privacy and strive to protect your
                information from unauthorized access, use, and disclosure. We do
                not store passwords, we use one time passwords instead.
              </Text>
              <Text>
                We do not store any payment card details and instead use{" "}
                <Text as="span" color="blue.500">
                  <a href="https://stripe.com" target="_blank" rel="noreferrer">
                    Stripe
                  </a>
                </Text>
                .
              </Text>
              <Text>
                However, no method of transmission over the Internet or method
                of electronic storage is 100% secure, so we cannot guarantee its
                absolute security.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Changes to This Privacy Policy
            </Heading>
            <Box mt="1rem">
              <Text>
                We may update this Privacy Policy from time to time. If we make
                material changes to this Privacy Policy, we will notify you by
                email or by posting a notice on our website or mobile
                application.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Contact Us
            </Heading>
            <Box mt="1rem">
              <Text>
                If you have any questions or concerns about this Privacy, please
                contact us at{" "}
                <Text as="span" color="blue.500">
                  <a href="mailto:info@labbs.se">info@labbs.se</a>
                </Text>
              </Text>
            </Box>
          </Text>
        </Container>
      </Box>
    </Layout>
  </>
);

export default PrivacyPolicy;
