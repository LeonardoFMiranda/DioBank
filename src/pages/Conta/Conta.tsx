import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import "./Conta.css";
import { AppContext } from "../../components/AppContext/AppContext";
import UserHeader from "../../components/Header/UserHeader";
import LearnMoreCard from "../../components/Card/LearnMoreCard";
import ImageCard1 from "../../assets/images/24.7__image1.png";
import ImageCard2 from "../../assets/images/Card__image2.png";
import ImageCard3 from "../../assets/images/Card__image3.png";
import ImageCard4 from "../../assets/images/Card__image4.png";
import ImageCard5 from "../../assets/images/Card__image5.jpg";
import ImageCard6 from "../../assets/images/Card__image6.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface UserData {
  email: string;
  password: string;
  name: string;
  tipoConta: string;
  balance: number;
  id: string;
}
const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);
  // console.log(`retorno da pagina conta`, isLoggedIn);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();
  console.log(userData);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <>
      <UserHeader />
      <Flex
        className="conta__container"
        justify="space-evenly"
        marginTop="3rem"
      >
        <Flex color="#fff" direction="column" width="300px" position="relative">
          <Text
            fontSize="1.5rem"
            fontWeight={800}
            align="center"
            marginBottom="1rem"
          >
            Serviços
          </Text>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            <div>
              <LearnMoreCard
                text="Cliente DioBank tem linhas de crédito com condições diferenciadas de pagamento."
                title="Emprestimo"
                image={ImageCard4}
                buttonText="Simule aqui"
              />
            </div>
            <div>
              <LearnMoreCard
                text="Cashback, Gift Cards, Vantagens e Recarga de celular pra você."
                title="Shopping DioBank"
                image={ImageCard5}
                buttonText="Acesse o shopping DB"
              />
            </div>
            <div>
              <LearnMoreCard
                text="Aproveite as vantagens de ter um cartão Platinum."
                title="Cartões de Crédito"
                image={ImageCard6}
                buttonText="Peça já o seu"
              />
            </div>
          </Carousel>
        </Flex>

        <Grid
          templateRows="repeat(2, 0.1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          p={4}
        >
          <GridItem rowSpan={1} colSpan={2}>
            {userData === undefined || userData === null ? (
              <Center>
                <Spinner color="#fff" size="xl" />
              </Center>
            ) : (
              <Box
                bg="#2d2d37"
                p={4}
                textAlign="center"
                borderRadius="25px"
                padding="1rem"
                marginBottom=".5rem"
                color="#fff"
                borderColor="#8d4ada"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text fontWeight={800} fontSize="1.5rem" marginBottom=".5rem">
                  Informações da Conta
                </Text>
                <Text fontSize="1rem" marginBottom=".5rem">
                  Nome: {userData?.name}
                </Text>
                <Text fontSize="1rem" marginBottom=".5rem">
                  Email: {userData?.email}
                </Text>
                <Text fontSize="1rem" marginBottom=".5rem">
                  Tipo de Conta: {userData?.tipoConta}
                </Text>
              </Box>
            )}
          </GridItem>

          <GridItem>
            {userData === undefined || userData === null ? (
              <Center>
                <Spinner color="#fff" size="xl" />
              </Center>
            ) : (
              <CardInfo
                mainContent={`Bem vindo ${userData?.name}`}
                content={`${actualData.getDate()}/${
                  actualData.getMonth() + 1
                }/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
              />
            )}
          </GridItem>

          <GridItem>
            {userData === undefined || userData === null ? (
              <Center>
                <Spinner color="#fff" size="xl" />
              </Center>
            ) : (
              <CardInfo
                mainContent="Saldo"
                content={`R$ ${userData?.balance}`}
              />
            )}
          </GridItem>
        </Grid>

        <Flex color="#fff" direction="column" width="300px" position="relative">
          <Text
            fontSize="1.5rem"
            fontWeight={800}
            align="center"
            marginBottom="1rem"
          >
            Descubra Mais
          </Text>
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            <div>
              <LearnMoreCard
                text="Aqui estamos sempre disponíveis para você! Em apenas um clique estamos a sua disposição."
                title="Atendimento ao Cliente 24/7"
                image={ImageCard1}
                buttonText="Conhecer"
              />
            </div>
            <div>
              <LearnMoreCard
                text="Descubra oportunidades de investimento que podem impulsionar seu dinheiro. No DioBank, oferecemos soluções de investimento sólidas e orientadas para resultados."
                title="Investimentos Lucrativos"
                image={ImageCard2}
                buttonText="Conhecer"
              />
            </div>
            <div>
              <LearnMoreCard
                text="Aqui as recompensas são gigantes! Cashback, Milhas Aéreas e Descontos Exclusivos para o titular do cartão!"
                title="Cartões de Crédito com Recompensas"
                image={ImageCard3}
                buttonText="Conhecer"
              />
            </div>
          </Carousel>
        </Flex>
      </Flex>
    </>
  );
};

export default Conta;
