import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

export default function PaginaPrincipal() {

    const [filmes, setFilmes] = useState([])

    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promises = axios.get(URL);

        promises.then((resp) => {
            console.log(resp);
        })
    }, [])

    return (
        <>
            <SelecioneFilme>
                <h1>Selecione o Filme</h1>
            </SelecioneFilme>
            <WrapperFilmes>
                {filmes.map(() => <Filme />)}
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
    background-color: red;
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
    margin: auto;
`