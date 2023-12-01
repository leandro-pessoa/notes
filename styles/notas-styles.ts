// import do módulo
import { styled } from 'styled-components/native'

// import das cores globais
import { colors } from './theme'

// declaração dos componentes estilizados

const Vazio = styled.View`
    padding: 20px;
    align-items: center;
`

const TextVazio = styled.Text`
    color: ${colors.fontColor};
    font-size: 25px;
    font-weight: 200;
`

const Nota = styled.View`
    padding: 10px;
    border-radius: 10px;
    background-color: ${colors.noteBackgroundColor};
    border-width: 0.5px;
    border-color: ${colors.borderColor};
    margin: 5px;
`

const Cabecalho = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ViewEA = styled.View`
    display: flex;
    flex-direction: row;
`

const Titulo = styled.Text`
    font-size: 20px;
    color: ${colors.fontColor};
    font-weight: 400;
`

const Msg = styled.Text`
    color: ${colors.fontColor};
    margin: 10px;
    font-size: 17px;
    font-weight: 300;
`

// export dos componentes

export { Vazio, TextVazio, Nota, Cabecalho, ViewEA, Titulo, Msg }



