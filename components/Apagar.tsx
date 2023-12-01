// imports dos módulos
import { Modal, View } from "react-native"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

// import dos componentes estilizados
import { Confirmation, ConfHeader, ConfTit, ConfBody, ConfText, ConfFooter } from "../styles/apagar-styles"
import { Cancel, Save, TextCancel } from "../styles/modalp-styles"
import { Btn } from "../styles/gerais"

// import do ícone
import AntIcon from 'react-native-vector-icons/AntDesign'

// import das cores globais
import { colors } from "../styles/theme"

// import da action
import { changeConfirmDisplay } from "../features/notesSlice"

// tipagem dos props
interface Props {
    id: string,
    data: object[]
}

export default function Apagar(props: Props): JSX.Element{

    // declaração do dispatch
    const dispatch = useAppDispatch()

    // state global voltado ao display do modal
    const confirmDisplay = useAppSelector(state => state.notes.confirmDisplay)

    // tipagem da nota que será excluída
    interface NotaSelecionada {
        id?: string,
        nota?: string, 
        titulo?: string
    }

    // state que armazena a nota que será excluída
    const [notaSelecionada, setNotaSelecionada] = useState<NotaSelecionada>({id: 'inexistente', nota: 'Inexistente', titulo: 'inexistente'})

    // abre a caixa de confirmação e seta a nota selecionada no state
    const press = (): void => {
        
        // seleciona a nota que recebeu o clique
        props.data.map(
            (value: {id?: string}, index: number, array: object[]) => {
                if(props.id === value.id){
                    setNotaSelecionada(value)
                }
            }
        )
        
        // abre a caixa de confirmação
        dispatch(changeConfirmDisplay(true))
    }

    // função dedicada à opção 'cancelar' da caixa de confirmação
    const cancel = (): void => {

        // seta a nota selecionada para o padrão
        setNotaSelecionada({id: 'inexistente', nota: 'Inexistente', titulo: 'inexistente'})

        // fecha a caixa de confirmação
        dispatch(changeConfirmDisplay(false))
    }

    // função que apaga a nota selecionada
    const confirm = async (): Promise<void> => {

        // caso a nota não seja 'undefined', ela será apagada 
        if(notaSelecionada.id != undefined){
            await AsyncStorage.removeItem(notaSelecionada.id)
        }
    }

    return (
        <>
            <Btn
                underlayColor={colors.touch}
                onPress={()=>press()}
            >
                <AntIcon name='close' size={20} color={'#000'}/>
            </Btn>
            <Modal
                animationType="fade"
                transparent={true}
                visible={
                    confirmDisplay && notaSelecionada.titulo != 'inexistente' ? true : false
                }
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.blur
                    }}
                >
                    <Confirmation>
                        <ConfHeader>
                            <ConfTit>
                                Apagar nota
                            </ConfTit>
                        </ConfHeader>
                        <ConfBody>
                            <ConfText>
                                Tem certeza que deseja apagar a nota com o título {notaSelecionada.titulo} ?
                            </ConfText>
                        </ConfBody>
                        <ConfFooter>
                            <Cancel
                                onPress={()=>cancel()}
                                underlayColor={colors.touch}
                            >
                                <TextCancel style={{color: '#535353', fontWeight: '300'}}>
                                    Cancelar
                                </TextCancel>
                            </Cancel>
                            <Save
                                onPress={()=>confirm()}
                                underlayColor={colors.touch}
                            >
                                <TextCancel>
                                    Confirmar
                                </TextCancel>
                            </Save>
                        </ConfFooter>
                    </Confirmation>
                </View>
            </Modal>
        </>
    )
}