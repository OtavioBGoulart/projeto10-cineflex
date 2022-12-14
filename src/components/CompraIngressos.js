import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompraIngressos({nome, setNome, CPF, setCPF, ids, statusAssento, setReserva}) {

    const navigate = useNavigate()

    function enviaReserva(e) {
        e.preventDefault();

        
        const numAssentos = statusAssento.seats.filter((assento) => {

            if (ids.includes(assento.id)) {
                
                return assento.name
            } else {

                return ""
            }
                
        } )

        //const assentosEscolhidos = numAssentos.map((a) => a.name)
        //console.log(numAssentos)
        let infoReservas;

        if (statusAssento !== undefined) {

                //console.log(statusAssento.seats);
                //console.log(ids);
                infoReservas = {
                movie: statusAssento.movie.title,
                date: statusAssento.day.date,
                time: statusAssento.name,
                reserves: numAssentos,
                nome: nome,
                cpf: CPF
            }
            setReserva(infoReservas)
        }

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const body = {
            ids: ids,
            name: nome,
            cpf: CPF
        }

        //console.log(body)

        const promise = axios.post(URL, body);

        promise.then((res) => {
            navigate("/sucesso")
        })

        promise.catch(() => alert("Erro no reserva dos assentos, tente novamente"));
    }

    return (
        <Formulario>
            <form onSubmit={enviaReserva}>
                <SessaoInput data-identifier="buyer-name-input">
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input id="nome" name="nome" type="text" placeholder="Digite seu nome.." value={nome} onChange={((e) => setNome(e.target.value))} required></input>
                </SessaoInput>
                <SessaoInput data-identifier="buyer-cpf-input">
                    <label htmlFor="CPF">CPF do comprador:</label>
                    <input id="CPF" name="CPF" type="text" placeholder="Digite seu CPF..." value={CPF} onChange={((e) => setCPF(e.target.value))} required></input>
                </SessaoInput>
                <CaixaBotao>
                    <button data-identifier="reservation-btn" type="submit">Reservar Asento(s)</button>
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