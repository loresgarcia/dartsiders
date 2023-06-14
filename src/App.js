import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial";
import PaginaLogin from "./paginas/PaginaLogin";
import PaginaEstudantes from "./paginas/PaginaEstudantes";
import PaginaNovoEstudante from "./paginas/PaginaNovoEstudante";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/estudantes" element={<PaginaEstudantes />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/novo-estudante" element={<PaginaNovoEstudante />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
