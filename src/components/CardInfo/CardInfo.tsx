import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}
const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box
      background="#2d2d37"
      minHeight="10vh"
      padding="1rem"
      borderRadius="25px"
      borderColor="#8d4ada"
      borderWidth="1px"
      borderStyle="solid"
    >
      <Text
        fontSize="1.15rem"
        fontWeight="bold"
        textAlign="center"
        color="#fff"
      >
        {mainContent}
      </Text>
      <Text fontSize=".95rem" color="#fff">
        {content}
      </Text>
    </Box>
  );
};

export default CardInfo;
