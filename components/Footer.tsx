import { Container, HStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container maxW="container.xl" py="1rem">
      <HStack>
        <p>© 2023 Lunds Akademiska Biljettbyrå</p>
      </HStack>
    </Container>
  );
}
