import { createReducer } from '@reduxjs/toolkit';
import { saveCommits, saveQueries } from '../actions/queries';

const initialState:any = {
  queries: [],
}; 

export const queriesReducer = createReducer(initialState, builder => {
  builder
    .addCase(saveQueries, (state, action) => {
        state.queries = action.payload
    })
    .addCase(saveCommits, (state, action:any) => {
      const commitsByRepo = {}
      const orderedCommits = action.payload && action.payload.sort((a:any, b:any) => b.date.localeCompare(a.date))
      orderedCommits.forEach((commit:any) => {
        const { repo } = commit;
        if (!commitsByRepo[repo]) {
          commitsByRepo[repo] = [];
        }
        commitsByRepo[repo].push(commit);
      })
      const combinedData = state.queries.map((repo:any) => ({
        ...repo,
        commits: commitsByRepo[repo.repo] || [],
      }));
      state.queries = combinedData
  })
});