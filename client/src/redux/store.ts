import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import { queriesReducer } from './features/reducers/queries';

enableMapSet();

export const store = configureStore({
    reducer: {
        queries: queriesReducer,
    },
    //For non-serializable warning at dispatch
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});