import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
            </Routes>
        </BrowserRouter>
    )
}
