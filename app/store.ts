// import do módulo
import { configureStore } from '@reduxjs/toolkit'

// import do reducer
import { notesReducer } from '../features/notesSlice'

// export da store
export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})

// exports das tipagens necessárias
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch