import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Horario({ horario }) {

    return (
        <>
            <Link to={`/assentos/${horario.id}`} style={{textDecoration: "none"}}>
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
    background: #E8833A;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
        filter: brightness(120%);
    }
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