// import dos módulos
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import ToastManager, { Toast } from 'toastify-react-native'

// import dos componentes estilizados
import { Save, TextSave } from "../styles/modalp-styles"

// import das cores globais
import { colors } from "../styles/theme"

// import das actions
import { changeEditDisplay, changeTitulo, changeNota } from "../features/notesSlice"

export default function Editar(): JSX.Element{

    // declaração do dispatch
    const dispatch = useAppDispatch()

    // id da nota que será alterada
    const id = useAppSelector(state => state.notes.editId)

    // novos valores que serão adicionados à nota
    const titulo = useAppSelector(state => state.notes.titulo)
    const nota = useAppSelector(state => state.notes.nota)

    // nota alterada (sem alterar o id)
    const novaNota = {id: id, titulo: titulo, nota: nota}

    // função que altera a nota armazenada no AsyncStorage
    const editar = async (): Promise<void> => {

        // verifica se não há algum campo vazio
        if(titulo != '' && titulo != null && titulo != undefined && nota != '' && nota != null && nota  != undefined){
            // faz a alteração da nota em si
            await AsyncStorage.mergeItem(id, JSON.stringify(novaNota))

            // fecha o modal
            dispatch(changeEditDisplay(false))

            // apaga os valores dos inputs
            dispatch(changeTitulo(''))
            dispatch(changeNota(''))
        }

        // caso haja algum campo em branco, aparecerá um feedback
        else{
            Toast.error('Preencha todos os campos', 'center')
        }
    }

    return (
        <>
            <ToastManager
                width={320}
                animationInTiming={1}
                animationOutTiming={1}
            />
            <Save
                onPress={()=>editar()}
                underlayColor={colors.touch}
            >
                <TextSave
                    style={{color: colors.alter}}
                >
                    Alterar
                </TextSave>
            </Save>
        </>
    )
}