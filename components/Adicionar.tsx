// import dos módulos do redux
import { useAppDispatch } from '../app/hooks'

// import das actions
import { changeAdDisplay } from '../features/notesSlice'

// import do ícone
import AntIcon from 'react-native-vector-icons/AntDesign'

// import das cores globais
import { colors } from '../styles/theme'

// import dos componentes estilizados
import { StyledView, Touch } from '../styles/adicionar-styles'

// import de outro componente
import ModalP from './ModalP'

export default function Adicionar(): JSX.Element{

    // declaração do dispatch
    const dispatch = useAppDispatch()

    return (
        <>
            <StyledView>
                <Touch
                    onPress={()=>dispatch(changeAdDisplay(true))}
                    underlayColor={colors.touch}
                >
                    <AntIcon
                        name='plus'
                        size={40}
                        color={colors.fontColor}
                    />
                </Touch>
            </StyledView>
            <ModalP modo='adicionar'/>
        </>
    )
}