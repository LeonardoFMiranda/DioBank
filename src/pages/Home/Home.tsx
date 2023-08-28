import { Card } from "../../components/Card/Card";
import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import { login } from "../../services/login";
import { Center, Input, Box, Text } from "@chakra-ui/react";
import { AppContext } from "../../components/AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { changeLocalStorage } from "../../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const validateUser = async (email: string, password:string) => {
    const  loggedIn = await login(email,password);
    
    if (!loggedIn ) {
      return alert("Email ou senha Inválido ");
    }
    setIsLoggedIn(true);
    changeLocalStorage({
      login: true,
    });
    navigate("/conta/1");
  };

  return (
    <>
      <Header />
      <Card>
        <section className="card__container">
          <Box
            className="card__01"
            backgroundColor="#1f182c"
            borderRadius="25px"
            width="500px"
          >
            <Text fontSize="5xl">
              Na Dio Banks valorizamos seu dinheiro, em poucos dias você ficará
              milionário!
            </Text>
          </Box>
          <div className="login__form">
            {/* {userData === null || userData === undefined ? (
                <h2>Loading...</h2>
              ) : (
                <h2>Informações Carregadas</h2>
              )} */}
            <Box backgroundColor="#1f182c" borderRadius="25px" width="100%">
              <h2 className="login__title">Já Possui cadastro?</h2>
              <h3 className="login__subtitle">
                Faça seu login e make the change._
              </h3>

              <form className="login__input">
                <Input
                  className="form__input"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Endereço de e-mail"
                  id="emailInput"
                  width="100%"
                  required
                />

                <Input
                  className="form__input"
                  type="password"
                  value={password}
                  onChange={(event) =>setPassword(event.target.value)}
                  placeholder="Senha"
                  id="senhaInput"
                  width="100%"
                  required
                />
              </form>
              <Center>
                <Button
                  onClick={() => validateUser(email, password)}
                  text="Entrar"
                  className="login__button"
                ></Button>
              </Center>
            </Box>
          </div>
        </section>
      </Card>
      <Footer />
    </>
  );
};

export default Home;
