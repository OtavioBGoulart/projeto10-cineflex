import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import DiaSessoes from "./DiaSessoes";

export default function SessoesFilmePage() {

    const [sessoes, setSessoes] = useState([]);
    const [filmeEscolhido, setFilmeEscolhido] = useState({})
    const { idFilme } = useParams();
    //console.log(idFilme);
    
    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(URL);

        promise.then((resp) => {
            //console.log(resp.data.days);
            setSessoes(resp.data.days);
            const filmeEscolhido = { img: resp.data.posterURL, name: resp.data.title }
            setFilmeEscolhido(filmeEscolhido)

        })

    }, [idFilme])

    return (
        <>
            <ContainerSessoes>
                <SelecioneHorario>
                    <h1>Selecione o Horário</h1>
                </SelecioneHorario>
                {sessoes.map((s) => <DiaSessoes key={s.id} sessao={s} />)}
            </ContainerSessoes>
            <Rodape>
                <CaixaFilme>
                    <img src={filmeEscolhido.img} alt="filme-escolhido" />
                </CaixaFilme>
                <h1>{filmeEscolhido.name}</h1>
            </Rodape>
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

const ContainerSessoes = styled.div`
    margin-bottom: 137px;
`

const Rodape = styled.div`
    width: 100vw;
    height: 117px;
    display: flex;
    align-items: center;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0px;
    left: 0px;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 15px;
    }
`

const CaixaFilme = styled.div`
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