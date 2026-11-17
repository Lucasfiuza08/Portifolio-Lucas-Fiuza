import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Sobre from "./pages/SobreMim";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";
import { Route, Routes } from "react-router";

function App(){
  return<>
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route element={<Layout/>}>
        <Route path="/sobremim" element={<Sobre/>}></Route>
        <Route path="/projetos" element={<Projetos/>}></Route>
        <Route path="/experiencias" element={<Experiencias/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Route>
    </Routes>
  </>
}

export default App;