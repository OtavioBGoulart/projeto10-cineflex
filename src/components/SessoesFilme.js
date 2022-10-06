import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function SessoesFilme() {

    const {idFilme} = useParams()
    console.log(idFilme);
    return (
        <>
            <Elemento />
        </>
    )
}


const Elemento = styled.div`
    width: 80vw;
    background-color: red;
    height: 80px;
`