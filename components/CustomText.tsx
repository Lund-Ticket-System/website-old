import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export function Header1({ text }: { text: string }) {
  return (
    <Text pt={10} color="primary.500" fontSize="2xl" fontWeight="bold">
      {text}
    </Text>
  );
}

export function Paragraph1({ text }: { text: string }) {
  return (
    <Text textAlign="left" color="primary.500" mt={4}>
      {text}
    </Text>
  );
}

export function List1({ list }: { list: string[] }) {
  return (
    <UnorderedList color="primary.500" mt={4}>
      {list.map((item) => (
        <ListItem textAlign="left" key={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
