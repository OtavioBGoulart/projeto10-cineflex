import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Horario({ horario }) {

    console.log(horario);

    return (
        <>
            <Link to={`/assentos/:${horario.id}`}>
                <CaixaHorario><p>{horario.name}</p></CaixaHorario>
            </Link>
        </>
    )
}

const CaixaHorario = styled.div`
    width: 82px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 15px; */
    background: #E8833A;
    border-radius: 3px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #FFFFFF;

    }
`