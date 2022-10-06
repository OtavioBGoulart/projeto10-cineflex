//import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";
import SessoesFilme from "./SessoesFilme";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/sessoes/:idFilme" element={<SessoesFilme />} />
            </Routes>
        </BrowserRouter>
    )
}
