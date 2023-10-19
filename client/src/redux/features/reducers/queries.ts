import { createReducer } from '@reduxjs/toolkit';
import { saveQueries } from '../actions/queries';

const initialState:any = {
  queries: [],
}; 

export const queriesReducer = createReducer(initialState, builder => {
  builder
    .addCase(saveQueries, (state, action) => {
        state.queries = action.payload
    })
});