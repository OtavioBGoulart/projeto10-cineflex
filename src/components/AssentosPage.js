import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

import Assento from "./Assento";
import LegendaStatusAssentos from "./LegendaSatusAssentos";
import CompraIngressos from "./CompraIngressos";

export default function AssentosPage() {

    const [statusAssento, setStatusAssento] = useState([]);
    const [sessaoEscolhida, setSessaoEscolhida] = useState({})
    const { idSessao } = useParams();
    //console.log(idSessao);

    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(URL);

        promise.then((res) => {
            console.log(res.data);
            setStatusAssento(res.data.seats);
            setSessaoEscolhida({
                img: res.data.movie.posterURL,
                name: res.data.movie.title,
                weekday: res.data.day.weekday,
                time: res.data.name
            })
        })

        promise.catch(() => alert("Deu ruim"))
    }, [idSessao])

    console.log(sessaoEscolhida);

    return (
        <>
            <SelecioneAssento>
                <h1>Selecione o assento</h1>
            </SelecioneAssento>
            <ListaAssentos>
                {statusAssento.map((a) => <Assento key={a.id} id={a.id} numAssento={a.name} status={a.isAvailable} />)}
            </ListaAssentos>
            <LegendaStatusAssentos />
            <CompraIngressos />
            <RodapeAssentos>
                <CaixaFilmeAssentos>
                    <img src={sessaoEscolhida.img} alt="sessão-escolhida" />
                </CaixaFilmeAssentos>
                <Descricao>
                <h1>{sessaoEscolhida.name}</h1>
                <h2>{sessaoEscolhida.weekday} - {sessaoEscolhida.time}</h2>
                </Descricao>
            </RodapeAssentos>
        </>
    )
}

const SelecioneAssento = styled.div`
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

const ListaAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    margin: 0 auto;
    width: 605px;
    gap: 15px 10px;
    @media (max-width: 700px) {
        width: 80vw;
    }
`

const RodapeAssentos = styled.div`
    width: 100vw;
    height: 117px;
    display: flex;
    align-items: center;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0px;
    left: 0px;
`
const CaixaFilmeAssentos = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-left: 30px;
    img {
        width: 88%;
        height: 88%;
    }
`

const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    h1, h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 15px;
        margin-bottom: 6px;
    }   
`
