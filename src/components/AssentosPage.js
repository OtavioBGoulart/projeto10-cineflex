import styled from "styled-components"

export default function AssentosPage() {

    return (
        <Imagem>
        <img src="https://www.praiagrande.sp.leg.br/botoes-logos/Construcao.png" />
        </Imagem>
    )
}

const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 400px;
        height: 400px;
    }
`