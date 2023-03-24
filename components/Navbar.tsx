import { Box, Container, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container maxW="container.lg" h="3rem" display="flex" alignItems="center">
      <HStack justifyContent="space-between" w="100%">
        <Link href="/">
          <Image src="/favicon.svg" width={32} height={32} alt="LABB Logo" />
        </Link>
        <HStack spacing="1rem">
          <Link href="/kontakta-oss">Kontakta oss</Link>
        </HStack>
      </HStack>
    </Container>
  );
}
