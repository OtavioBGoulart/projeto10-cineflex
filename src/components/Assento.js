import { useState } from "react"
import styled from "styled-components"

export default function Assento({ id, numAssento, status, ids, setIds }) {

    const [assentoLivre, setAssentoLivre] = useState("#C3CFD9")

    function reservarAssento() {

        if (assentoLivre === "#C3CFD9") {
            setAssentoLivre("#1AAE9E");
            const reservaAssento = [...ids, id];
            setIds(reservaAssento);
        } else {
            setAssentoLivre("#C3CFD9");
            const removeReserva = ids.filter((i) => i !== id );
            setIds(removeReserva);
        }
    }

    function indisponivel() {
        alert("Assento ocupado, escolha um disponível")
    }

    return (
        <>
            {status ? (
                <SecaoAssento onClick={reservarAssento} style={{ backgroundColor: assentoLivre}}>{numAssento}</SecaoAssento>
            ) : (<SecaoAssento onClick={indisponivel} style={{ backgroundColor: "#FBE192", border: "1px solid #F7C52B" }}>{numAssento}</SecaoAssento>
            )}
        </>
    )
}

const SecaoAssento = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    box-sizing: border-box;
    &:hover {
        cursor: pointer;
    }
`