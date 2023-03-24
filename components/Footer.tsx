import { Container, HStack } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <Container maxW="container.xl" py="1rem" mt="auto">
      <HStack justifyContent="space-between">
        <p>© 2023 Lunds Akademiska Biljettbyrå</p>
        <HStack p="1rem" spacing="1rem">
          <a href="mailto:info@labbs.se">
            <MdMail />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091051603614"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </HStack>
      </HStack>
    </Container>
  );
}
