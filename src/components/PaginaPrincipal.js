import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

import Filme from "./Filme"

export default function PaginaPrincipal() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promises = axios.get(URL);

        promises.then((resp) => {
            setFilmes(resp.data)
        })
    }, [])

    //console.log(filmes)

    return (
        <>
            <SelecioneFilme>
                <h1>Selecione o filme</h1>
            </SelecioneFilme>
            <WrapperFilmes>
                {filmes.map((f) => <Filme data-identifier="movie-outdoor" key={f.id} imgFilme={f.posterURL} idFilme={f.id}/>)}
            </WrapperFilmes>
        </>
    )
}

const SelecioneFilme = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845; 
    }
`

const WrapperFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
`