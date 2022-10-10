import styled from "styled-components"
import { Link } from "react-router-dom";

export default function SucessoPage({ reserva }) {

    //console.log(reserva);

    if (reserva.reserves === undefined) {
        return <div>CARREGANDO...</div>
    }

    return (
        <>
            <Sucesso><h1>Pedido feito com sucesso!</h1></Sucesso>
            <FilmeEscolhido data-identifier="movie-session-infos-reserve-finished">
                <h1>Filme e sessão</h1>
                <p>{reserva.movie}</p>
                <p>{reserva.date} {reserva.time}</p>
            </FilmeEscolhido>
            <AssentosEscolhidos data-identifier="seat-infos-reserve-finished">
                <h1>Ingressos</h1>
                {reserva.reserves.map((r) => <p key={r.id}>Assento: {r.name}</p>)}
            </AssentosEscolhidos>
            <Comprador data-identifier="buyer-infos-reserve-finished">
                <h1>Comprador</h1>
                <p>Nome: {reserva.nome}</p>
                <p>CPF: {reserva.cpf}</p>
            </Comprador>
            <Link to={"/"} style={{ textDecoration: "none" }}>
                <Voltar>
                    <button data-identifier="back-to-home-btn">Voltar para Home</button>
                </Voltar>
            </Link>
        </>
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
const FilmeEscolhido = styled.div`
    margin-left: 30px;
    margin-bottom: 40px;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 15px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const AssentosEscolhidos = styled.div`
    margin-left: 30px;
    margin-bottom: 40px;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 15px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const Comprador = styled.div`
    margin-left: 30px;
    margin-bottom: 40px;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 15px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`

const Voltar = styled.div`
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