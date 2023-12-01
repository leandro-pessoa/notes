// import dos módulos
import { Modal } from 'react-native'
import { useAppDispatch, useAppSelector } from '../app/hooks'

// import dos componentes estilizados
import { Container, Header, Cancel, TextCancel, InputArea, Label, Input } from '../styles/modalp-styles'

// import das cores globais
import  { colors } from '../styles/theme'

// imports des outros componentes
import Salvar from './Salvar'
import Editar from './Editar'

// import das actions
import { changeTitulo, changeNota, changeAdDisplay, changeEditDisplay } from '../features/notesSlice'

// tipagem dos props
interface Props {
    modo: string
}

export default function ModalP(props: Props): JSX.Element{

    // declaração do dispatch
    const dispatch = useAppDispatch()

    // states voltados ao modo selecionado
    const adDisplay = useAppSelector(state => state.notes.adDisplay)
    const editDisplay = useAppSelector(state => state.notes.editDisplay)

    // states dos inputs
    const titulo = useAppSelector(state => state.notes.titulo)
    const nota = useAppSelector(state => state.notes.nota)

    // fecha o modal e apaga os inputs
    const cancelar = (): void => {
        dispatch(changeTitulo(''))
        dispatch(changeNota(''))
        dispatch(changeAdDisplay(false))
        dispatch(changeEditDisplay(false))
    }

    return (
        <Modal
                animationType='slide'
                transparent={true}
                visible={
                    props.modo === 'editar' ?
                        editDisplay : adDisplay
                }
            >
                <Container>
                    <Header>
                        <Cancel
                            onPress={()=>cancelar()}
                            underlayColor={colors.touch}
                        >
                            <TextCancel>
                                Cancelar
                            </TextCancel>
                        </Cancel>
                        {   
                            props.modo === 'adicionar' ? 
                                <Salvar/>
                            :
                                <Editar/>
                        }
                    </Header>
                    <InputArea>
                        <Label>
                            Título
                        </Label>
                        <Input
                            placeholder='Título da nota'
                            placeholderTextColor={colors.placeholderColor}
                            multiline={true}
                            value={
                                titulo
                            }
                            onChangeText={value => dispatch(changeTitulo(value))}
                            
                            scrollEnabled={true}
                        />
                        <Label>
                            Nota
                        </Label>
                        <Input
                            placeholder='Digite sua nota'
                            placeholderTextColor={colors.placeholderColor}
                            multiline={true}
                            value={
                                nota
                            }
                            onChangeText={value => dispatch(changeNota(value))}
                            scrollEnabled={true}
                        />
                    </InputArea>
                </Container>
            </Modal>
    )
}