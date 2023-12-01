// import dos módulos
import ToastManager, { Toast } from 'toastify-react-native'

// import do módulo asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage'

// import dos componentes estilizados
import { Save, TextSave } from '../styles/modalp-styles'

// import das cores globais
import { colors } from '../styles/theme'

// import dos módulos do redux
import { useAppDispatch, useAppSelector } from '../app/hooks'

// import da action
import { changeAdDisplay, changeNota, changeTitulo } from '../features/notesSlice'

export default function Salvar(): JSX.Element{

    // declaração do dispatch
    const dispatch = useAppDispatch()

    // states globais
    const titulo = useAppSelector(state => state.notes.titulo)
    const nota = useAppSelector(state => state.notes.nota)

    const storeData = async (): Promise<void> => {

        // id único de cada nota
        const id: number = Math.random() * 9999999999

        // conteúdo da nota
        const value: object = {id: String(id),titulo: titulo, nota: nota}

        // armazenamento da nota
        if(titulo != '' && titulo != null && titulo != undefined && nota != '' && nota != null && nota != undefined){
            try {
                await AsyncStorage.setItem(String(id), JSON.stringify(value))
                dispatch(changeAdDisplay(false))
                dispatch(changeTitulo(''))
                dispatch(changeNota(''))
            }
            catch (err) {
                console.log(err)
                Toast.error('Ocorreu algum erro.', 'center')
            }
        }
        else{
            Toast.error('Preencha todos os campos!', 'center')
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
                onPress={()=>storeData()}
                underlayColor={colors.touch}
            >
                <TextSave>
                    Salvar
                </TextSave>
            </Save>
        </>
    )
}