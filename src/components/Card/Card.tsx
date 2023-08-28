import "./Card.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <>
      <ChakraProvider>
        <Box minHeight="59vh" backgroundColor="#1f182c" padding="25px">
          {children}
        </Box>
      </ChakraProvider>
    </>
  );
};
