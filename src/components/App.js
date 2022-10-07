//import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";
import SessoesFilmePage from "./SessoesFilme";
import AssentosPage from "./AssentosPage";
import styled from "styled-components";
import SucessoPage from "./SucessoPage";
import { useState } from "react";


export default function App() {

    const [reserva, setReserva] = useState({})

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <ScreamContainer>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} />
                    <Route path="/sessoes/:idFilme" element={<SessoesFilmePage />} />
                    <Route path="/assentos/:idSessao" element={<AssentosPage setReserva={setReserva}/>} />
                    <Route path="/sucesso" element={<SucessoPage reserva={reserva} /> } />
                </Routes>
            </ScreamContainer>
        </BrowserRouter>
    )
}

const ScreamContainer = styled.div`
    width: 100vw;
`