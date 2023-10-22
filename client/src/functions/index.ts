import { Dispatch } from "redux"
import { getCommits, getQueries } from "../api"
import { saveCommits, saveQueries } from "../redux/features/actions/queries"

export const fetchData = async(dispatch:Dispatch) => {
    const queries = await getQueries()
    if(queries && queries.data.length > 0){
        dispatch(saveQueries(queries.data))
    }
    const allCommits = await getCommits()
    if(allCommits && allCommits.data.length > 0){
      dispatch(saveCommits(allCommits.data))
  }
}