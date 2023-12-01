// import dos módulos
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// tipagem dos states
interface State {
    titulo: string,
    nota: string,
    adDisplay: boolean,
    confirmDisplay: boolean,
    editDisplay: boolean,
    editId: string
}

// declaração dos states
const initialState: State = {
    titulo: '',
    nota: '',
    adDisplay: false,
    confirmDisplay: false,
    editDisplay: false,
    editId: ''
}

// declaração do slice e das actions
export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        changeTitulo: (state, action: PayloadAction<string>) => {
            state.titulo = action.payload
        },
        changeNota: (state, action: PayloadAction<string>) => {
            state.nota = action.payload
        },
        changeAdDisplay: (state, action: PayloadAction<boolean>) => {
            state.adDisplay = action.payload
        },
        changeConfirmDisplay: (state, action: PayloadAction<boolean>) => {
            state.confirmDisplay = action.payload
        },
        changeEditDisplay: (state, action: PayloadAction<boolean>) => {
            state.editDisplay = action.payload
        },
        changeEditId: (state, action: PayloadAction<string>) => {
            state.editId = action.payload
        }
    }
})

// export das actions
export const {
     changeTitulo,
     changeNota, 
     changeAdDisplay, 
     changeConfirmDisplay, 
     changeEditDisplay,
     changeEditId
} = notesSlice.actions

// export do reducer
export const notesReducer = notesSlice.reducer

