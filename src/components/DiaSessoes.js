import styled from "styled-components"
import Horario from "./Horario";

export default function DiaSessoes({ sessao }) {

    return (
        <>
           <DiaDaSemana><p>{sessao.weekday} - {sessao.date}</p></DiaDaSemana>
           <Horarios>
            {sessao.showtimes.map((horario) => <Horario key={horario.id} horario={horario}/> )}
            </Horarios>
        </>
    )
}

const DiaDaSemana = styled.div`
    margin-left: 30px;
    margin-bottom: 20px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
`

const Horarios = styled.div`
    display: flex;
    margin-left: 30px;
    margin-bottom: 20px;
    gap: 15px
`