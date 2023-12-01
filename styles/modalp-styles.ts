// import do módulo
import { styled } from 'styled-components/native'

// import das cores globais
import { colors } from './theme'

// declaração dos componentes estlilizados

const Container = styled.View`
    background-color: ${colors.backgroundColor};
    width: 100%;
    flex: 1;
`

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.borderColor};
`

const Cancel = styled.TouchableHighlight`
    border-radius: 6px;
`

const TextCancel = styled.Text`
    color: ${colors.cancel};
    font-size: 18px;
    margin: 8px;
`

const Save = styled.TouchableHighlight`
    border-radius: 6px;
`

const TextSave = styled.Text`
    color: ${colors.save};
    font-size: 18px;
    margin: 8px;
`

const InputArea = styled.View`
    width: 100%;
    margin-top: 30px;
`

const Label = styled.Text`
    color: ${colors.fontColor};
    text-shadow: 1px 1px 2px ${colors.shadowColor};
    font-size: 25px;
    margin: 6px;
    margin-right: 40px;
    margin-left: 10px;
    font-weight: 300;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.borderColor};
`

const Input = styled.TextInput`
    font-size: 18px;
    margin: 5px;
    color: ${colors.fontColor};
`


// export dos componentes

export { Container, Header, Cancel, TextCancel, Save, TextSave, InputArea, Label, Input}