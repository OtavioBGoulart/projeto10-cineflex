import styled from "styled-components"

export default function LegendaStatusAssentos() {

    return(
        <ContainerLabelStatus>
            <Status>
                <div style={{backgroundColor: "#1AAE9E", border: "1px solid #0E7D71"}}></div>
                <h1>Selecionado</h1>
            </Status>
            <Status>
                <div style={{backgroundColor: "#C3CFD9", border: "1px solid #808F9D"}}></div>
                <h1>Disponível</h1>
            </Status>
            <Status>
                <div style={{backgroundColor: "#FBE192", border: "1px solid #F7C52B"}}></div>
                <h1>Indisponível</h1>
            </Status>
        </ContainerLabelStatus>
    )
}

const ContainerLabelStatus = styled.div`
    width: 50vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0 auto;
`
const Status = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
        width: 25px;
        height: 25px;
        background: #1AAE9E;
        border: 1px solid #0E7D71;
        border-radius: 17px;
        margin-bottom: 10px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`