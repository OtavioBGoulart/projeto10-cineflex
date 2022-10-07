import styled from "styled-components"

export default function CompraIngressos() {

    return (
        <Formulario>
            <form>
                <SessaoInput>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input id="nome" name="nome" type="text" placeholder="Digite seu nome.." required></input>
                </SessaoInput>
                <SessaoInput>
                    <label htmlFor="CPF">CPF do comprador:</label>
                    <input id="CPF" name="CPF" type="text" placeholder="Digite seu CPF..." required></input>
                </SessaoInput>
                <CaixaBotao>
                    <button type="submit">Reservar Asento(s)</button>
                </CaixaBotao>
            </form>
        </Formulario>
    )
}

const Formulario = styled.div`
    width: 80vw;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    //align-items: center;
`
const SessaoInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

color: #293845;
    }
    input {
        width: 100%;
        height: 51px;
        padding-left: 10px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: black;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        box-sizing: border-box;
        ::placeholder {
            color: #AFAFAF;
        }
    }
`
const CaixaBotao = styled.div`
    display: flex;
    justify-content: center;
        button {
            width: 225px;
            height: 42px;
            background: #E8833A;
            margin-top: 50px;
            margin-bottom: 147px;
            border-radius: 3px;
            border: none;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            letter-spacing: 0.04em;
            color: #FFFFFF;
        }
`