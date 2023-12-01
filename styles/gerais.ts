// import do módulo
import { styled } from 'styled-components/native'

// import das cores globais
import { colors } from './theme'

// declaração dos componentes estilizados

const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.backgroundColor};
    justify-content: space-between;
`

const Btn = styled.TouchableHighlight`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 50px;
`

// export do componente
export { StyledSafeAreaView, Btn }