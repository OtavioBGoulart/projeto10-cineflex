import styled from "styled-components"

export default function SucessoPage() {

    return (
        <Sucesso><h1>Pedido feito com sucesso!</h1></Sucesso>
    )
}

const Sucesso = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
`