import { login } from "./login"; // Substitua pelo caminho correto para o arquivo que contém a função
// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn,
//   }),
// }));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockNavigate
// }))

describe("login", () => {
  
  const mockEmail = "emailTeste@teste.com";
  const mockPassword = '123456'
  // const mockEmail = 'leomiranda1997@gmail.com'
  it("Deve exibir um alert com boas-vindas caso o email seja valido", async () => {
    await login(mockEmail,mockPassword);
    const response = await login(mockEmail,mockPassword)
    expect(response).toBeTruthy()
    
  });

  it("Deve exibir um erro caso o email seja invalido", async () => {
    const response = await login("email@invalido.com", 'Senha invalida');
    expect(response).toBeFalsy()
    
  });
});
