// imports dos módulos
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import SystemNavigationBar from 'react-native-system-navigation-bar'

// import da store
import { store } from './app/store'

// imports dos componentes
import Header from './components/Header'
import Notas from './components/Notas'
import Adicionar from './components/Adicionar'

// imports dos componentes estilizados
import { StyledSafeAreaView } from './styles/gerais'

// import das cores globais
import { colors } from './styles/theme'

export default function App(): JSX.Element{

  // altera a cor da barra de navegação para 'translucent'
  SystemNavigationBar.setNavigationColor('translucent')

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle='dark-content'
      />
      <StyledSafeAreaView>
        <Header/>
        <Notas/>
        <Adicionar/>
      </StyledSafeAreaView>
    </Provider>
  )
}