import "./App.css";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonAppBar from "./components/ButtonAppBar";
function App() {
  return (
    <>
    <ButtonAppBar />
      <ToastContainer autoClose={2500} />
      <RouterConfig />
    </>
  );
}

export default App;
