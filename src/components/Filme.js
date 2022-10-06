import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Filme({ imgFilme, idFilme }) {

    return (
        <>
            <Link to={`/sessoes/${idFilme}`}>
                <CaixaFilme>
                    <img src={imgFilme} alt="imagem-do-filme"/>
                </CaixaFilme>
            </Link>
        </>
    )
}

const CaixaFilme = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center; 
    &:hover {
        cursor: pointer;
    }
    img {
        width: 88%;
        height: 88%;
    }
`