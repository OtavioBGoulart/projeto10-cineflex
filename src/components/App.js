//import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";
import SessoesFilmePage from "./SessoesFilme";
import AssentosPage from "./AssentosPage";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/sessoes/:idFilme" element={<SessoesFilmePage />} />
                <Route path="/assentos/:idSessao" element={<AssentosPage />} />
            </Routes>
        </BrowserRouter>
    )
}
