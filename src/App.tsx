
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext/AppContext";
import MainRoutes from "./routes";
import {createLocalStorage, getAllLocalStorage} from "./services/storage";



function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <MainRoutes/>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
