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
            Privacy Policy for Lunds Akademiska Biljettbyrå (LABB) At LABB, we
            are committed to protecting the privacy of our users. This Privacy
            Policy describes how we collect, use, and share information about
            you when you use our website and mobile application (the
            "Services").
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Information We Collect
            </Heading>
            <Text>
              We collect information about you when you use our Services. This
              includes:
            </Text>
            <Box pl="2rem" mt="1rem">
              <Text>
                Personal Information: When you create an account with us, we
                collect your name and email address. If you purchase a ticket
                through our Services, we collect your payment information, which
                may include your credit card number and billing address.
              </Text>
              <Text>
                Usage Information: We collect information about how you use our
                Services, such as the pages you visit and the features you use.
                We may also collect information about your device, such as your
                device type, operating system, and browser type.
              </Text>
              <Text>
                Location Information: If you grant us permission, we may collect
                your device's location information to provide you with relevant
                content and services.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              How We Use Your Information
            </Heading>
            <Text>
              We use your information to provide and improve our Services, as
              well as for other purposes, such as:
            </Text>
            <Box pl="2rem" mt="1rem">
              <Text>
                Personalization: We use your information to personalize your
                experience on our Services, such as by providing you with
                personalized recommendations and content.
              </Text>
              <Text>
                Marketing: We may use your information to send you marketing
                communications about our Services, as well as other products and
                services that may be of interest to you.
              </Text>
              <Text>
                Analytics: We use your information to analyze how our Services
                are used, such as by measuring the effectiveness of our
                marketing campaigns and improving the user experience.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              How We Use Your Information
            </Heading>
            <Text>
              We use your information to provide and improve our Services, as
              well as for other purposes, such as:
            </Text>
            <Box pl="2rem" mt="1rem">
              <Text>
                Personalization: We use your information to personalize your
                experience on our Services, such as by providing you with
                personalized recommendations and content.
              </Text>
              <Text>
                Marketing: We may use your information to send you marketing
                communications about our Services, as well as other products and
                services that may be of interest to you.
              </Text>
              <Text>
                Analytics: We use your information to analyze how our Services
                are used, such as by measuring the effectiveness of our
                marketing campaigns and improving the user experience.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              How We Share Your Information
            </Heading>
            <Text>
              We do not sell your information to third parties. However, we may
              share your information with third parties for various purposes,
              such as:
            </Text>
            <Box pl="2rem" mt="1rem">
              <Text>
                Service Providers: We may share your information with
                third-party service providers who help us provide and improve
                our Services, such as payment processors and marketing partners.
              </Text>
              <Text>
                Nationer/Sektioner: If you are a member of a Nation/Sektion or
                have followed or purchased an event from them, we may share
                certain information about you with them.
              </Text>
              <Text>
                Legal Requirements: We may share your information if we are
                required to do so by law or if we believe that such action is
                necessary to comply with the law or to protect the rights,
                property, or safety of our users or others.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Your Choices
            </Heading>
            <Text>
              You have certain choices about how we use and share your
              information. You can:
            </Text>
            <Box pl="2rem" mt="1rem">
              <Text>
                Control Location Information: You can control the collection of
                location information by adjusting your device's location
                settings.
              </Text>
              <Text>
                Delete Your Account: You can delete your account at any time by
                contacting us or in the app when feature is available.
              </Text>
              <Text>
                Analytics: We use your information to analyze how our Services
                are used, such as by measuring the effectiveness of our
                marketing campaigns and improving the user experience.
              </Text>
            </Box>
            <Heading as="h2" fontSize="2xl" mt="2rem">
              Security
            </Heading>
            <Box pl="2rem" mt="1rem">
              <Text>
                We take reasonable measures to protect your information from
                unauthorized access, use, and disclosure. We do not store
                passwords; we use OTP. We also do not store payment card details
                and instead use Stripe. We try to collect only the necessary
                information.
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
            <Box pl="2rem" mt="1rem">
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
            <Box pl="2rem" mt="1rem">
              <Text>
                If you have any questions or concerns about this Privacy, please
                contact us: <br />
                <a href="mailto:info@labbs.se">
                  <MdMail />
                </a>
              </Text>
            </Box>
          </Text>
        </Container>
      </Box>
    </Layout>
  </>
);

export default PrivacyPolicy;
