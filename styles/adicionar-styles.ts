// import do módulo
import { styled } from 'styled-components/native'

// declaração dos componentes estilizados

const StyledView = styled.View`
    display: flex; 
    align-items: center;
    margin: 20px;
    padding-bottom: 30px;
`

const Touch = styled.TouchableHighlight`
    padding: 10px;
    border-radius: 50px;
`

// export dos componentes
export { StyledView, Touch }