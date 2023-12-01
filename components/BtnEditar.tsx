// import dos módulos
import { useAppDispatch } from '../app/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'

// import do ícone
import FeatherIcon from 'react-native-vector-icons/Feather'

// import dos componentes estilizados
import { Btn } from '../styles/gerais'

// import das actions
import { changeEditDisplay, changeTitulo, changeNota, changeEditId } from '../features/notesSlice'

// import das cores globais
import { colors } from '../styles/theme'

// tipagem dos props
interface Props {
    id: string
}

export default function Editar(props: Props): JSX.Element{

    //declaração do dispatch
    const dispatch = useAppDispatch()

    // faz a seleção da nota a ser armazenada e abre o modal
    const press = async (): Promise<void> => {

        // abre o modal
        dispatch(changeEditDisplay(true))

        // coloca o id da nota selecionada em um state global para ser utilizado na alteração
        dispatch(changeEditId(props.id))

        // adquire a nota por meio do id 
        const nota = await AsyncStorage.getItem(props.id)
        
        // se a nota não for nula, o state é alterado
        if(nota != null){
            // converte a nota de string para objeto 
            const notaObjeto = JSON.parse(nota)
            
            // seta os valores dos inputs do modal
            dispatch(changeTitulo(notaObjeto.titulo))
            dispatch(changeNota(notaObjeto.nota))
        }
    }

    return (
        <>
            <Btn
                onPress={()=>press()}
                underlayColor={colors.touch}
            >
                <FeatherIcon name='edit' size={18} color='#000'/>
            </Btn>
        </>
    )
}