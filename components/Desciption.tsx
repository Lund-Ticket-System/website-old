import { Box } from "@chakra-ui/react";
import { lists, paragraphs, headers } from "components/text";
import { Header1, List1, Paragraph1 } from "./CustomText";

export default function Description() {
  return (
    <Box py={4} px={{ base: 4, sm: 12 }} rounded={10} bg="accent.500">
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
