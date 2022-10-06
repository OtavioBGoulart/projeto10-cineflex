import styled from "styled-components"

export default function Header () {

    return (
        <BarraMenu>
            <h1>CINEFLEX</h1>
        </BarraMenu>
    )
}

const BarraMenu = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`