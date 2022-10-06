import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import DiaSessoes from "./DiaSessoes";

export default function SessoesFilmePage() {

    const [sessoes, setSessoes] = useState([]);
    const { idFilme } = useParams();
    //const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    //console.log(idFilme);

    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(URL);

        promise.then((resp) => {
            console.log(resp.data.days);
            setSessoes(resp.data.days);
        })

    }, [idFilme])

    return (
        <>
            <SelecioneHorario>
                <h1>Selecione o Horário</h1>
            </SelecioneHorario>
            {sessoes.map((s) => <DiaSessoes key={s.id} sessao={s}/>)}
        </>
    )
}


const SelecioneHorario = styled.div`
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