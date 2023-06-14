import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial";
import PaginaLogin from "./paginas/PaginaLogin";
import PaginaEstudantes from "./paginas/PaginaEstudantes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/estudantes" element={<PaginaEstudantes />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
