import { createAction } from "@reduxjs/toolkit"

export const saveQueries = createAction('/saveQueries')
export const saveCommits = createAction('/saveCommits')
export const saveEvents = createAction('/saveEvents')