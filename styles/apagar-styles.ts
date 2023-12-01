// import do módulo
import { styled } from "styled-components/native"

// import das cores globais
import { colors } from "./theme"

// declaração dos componentes estilizados



const Confirmation = styled.View`
    display: flex;
    justify-content: space-between;
    height: 200px;
    width: 330px;
    background-color: white;
    border-radius: 10px;
    background-color: ${colors.backgroundColor};
    padding: 15px;
`

const ConfHeader = styled.View`
    align-items: center;
`

const ConfTit = styled.Text`
    font-size: 27px;
    font-weight: 200;
    color: ${colors.fontColor};
`   

const ConfBody = styled.View`

`

const ConfText = styled.Text`
    font-size: 15px;
    color: ${colors.fontColor};
    font-weight: 300;
`

const ConfFooter = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-width: 1px;
    border-top-color: ${colors.borderColor};
    padding-top: 12px;
`

// export dos componentes

export { Confirmation, ConfHeader, ConfTit, ConfBody, ConfText, ConfFooter }
