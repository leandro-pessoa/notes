// import do módulo
import { styled } from "styled-components/native"

// import das cores globais
import { colors } from "./theme"

// declaração dos componentes estilizados

const StyledHeader = styled.View`
    display: flex;
    align-items: center;
    padding-top: 30px;
`

const Title = styled.Text`
    color: ${colors.fontColor};
    font-size: 30px;
    font-weight: 300;
    text-shadow: 1px 1px 2px ${colors.shadowColor};
`

// export dos componentes
export { StyledHeader, Title }