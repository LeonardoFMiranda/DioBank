import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import Button from "../Button/Button";

interface ILearnMoreCard {
  image:string
  text:string 
  title:string 
  buttonText:string
}
const LearnMoreCard = ({title,text,image,buttonText}:ILearnMoreCard) => {
  return (
    <Card
      maxW="sm"
      width="300px"
      height="100%"
      color="#fff"
      marginRight="1rem"
      borderColor="#8d4ada"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="25px"
      padding=".5rem"
      bg="#2d2d37"
      marginBottom="1rem"
    >
      <CardBody bg="#2d2d37">
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width="100%"
          
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text fontSize="md">
            {text}
          </Text>
        </Stack>
        <Button
          onClick={() => {}}
          text={buttonText}
          className="primaryButton"
        ></Button>
      </CardBody>
    </Card>
  );
};

export default LearnMoreCard;
