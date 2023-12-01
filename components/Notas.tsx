// imports dos módulos
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import ToastManager, { Toast } from 'toastify-react-native'

// import dos componentes estilizados
import { Vazio, TextVazio, Nota, Cabecalho, ViewEA, Titulo, Msg } from '../styles/notas-styles'

// imports de outros componentes
import Apagar from './Apagar'
import BtnEditar from './BtnEditar'
import ModalP from './ModalP'

export default function Notas(): JSX.Element{

    // state que guardará a lista que contém os objetos com as notas
    const [data, setData] = useState<Array<object>>([])

    // lê o storage e armazena os dados contidos nele no state 'data'
    const getNotas = async (): Promise<void> => {

        try{

            // obtém todas as chaves 
            const data: readonly string[] = await AsyncStorage.getAllKeys()

            // array temporário para o armazenamento das notas
            const notas: object[] = []
            
            // pega cada nota e a transfere para o array temporário
            for(let i in data){
                const nota = await AsyncStorage.getItem(data[i])
                if(nota != null){
                    notas.push(JSON.parse(nota))
                }
            }

            // seta o state data com o conteúdo do array temporário
            setData(notas)
        }

        // caso dê algum erro, aparecerá um feedback
        catch(err){
            Toast.error('Ocorreu algum erro.', 'center')
        }
    }

    // executa a função 'getNotas' automaticamente
    useEffect(() => {
        getNotas()
    })

    // tipagem de cada objeto da lista de notas
    type Item = {
        id: string,
        nota: string,
        titulo: string
    }

    return (
        <>  
            <ToastManager/>
            {   
                data[0] == null ? 
                <Vazio>
                    <TextVazio>
                        Sua lista está vazia
                    </TextVazio>
                </Vazio>
                :
                <FlatList
                    style={{margin: 15, marginTop: 30}}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({item}: {item: Item}) => 
                            <Nota>
                                <Cabecalho>
                                    <Titulo>{item.titulo}</Titulo>
                                    <ViewEA>
                                        <BtnEditar
                                            id={item.id}
                                        />
                                        <Apagar 
                                            id={item.id}
                                            data={data}
                                        />
                                    </ViewEA>                
                                </Cabecalho>
                                <Msg>{item.nota}</Msg>
                            </Nota>   
                    }
                />
            }
            <ModalP modo='editar'/>
        </>
    )
}