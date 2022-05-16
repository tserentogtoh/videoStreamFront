import { Box, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
export const Header = () => {
  return (
    <Stack bg="#242323" w="100%">
      <HStack p={5} justifyContent="space-between">
        <Box h="40px" w="40px" borderRadius="50%" bg="#FFC226" />
        <Input color="white" _focus={{ border: "1px solid #FFC226" }} w="40%" />
        <Link href="/file-upload">
          <Button color="black" bg="#FFC226">
            file upload
          </Button>
        </Link>
      </HStack>
    </Stack>
  );
};
