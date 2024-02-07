import axios from "axios"
import { saveEvents } from "../redux/features/actions/queries";

interface Query {
    owner: string;
    repo: string;
}

const headers = () => {
    return {
        headers: {
            'Content-Type': 'application/json', 
        }
    }
}

export const getQueries = async() => {
    try {
        const data = await axios.get(`${import.meta.env.VITE_SERVER}/queries`, headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const getCommits = async() => {
    try {
        const data = await axios.get(`${import.meta.env.VITE_SERVER}/commits`, headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const getEvents = async(owner: string, dispatch: any) => {
    try {
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        const data:[] = (await axios.get(`https://api.github.com/users/${owner}/events?since=${oneYearAgo.toISOString()}`)).data
        const pushEvents = data.filter((d:any) => d.type === 'PushEvent')
        let processData:any = pushEvents.map((d:any,i:number) => ({
            created: d.created_at,
            contributions: d.payload.commits.length
        }))
        dispatch(saveEvents(processData))
        return    
    } catch (error) {
        console.log(error)
    }
}

export const getContributors = async(currentRepo: any, setContributors: any) => {
    try {
        const data:[] = (await axios.get(`https://api.github.com/repos/${currentRepo.owner}/${currentRepo.repo}/contributors`)).data
        setContributors(data)
        return    
    } catch (error) {
        console.log(error)
    }
}

export const createQueryRequest = async(query: Query) => {
    try {
        const data = await axios.post(`${import.meta.env.VITE_SERVER}/queries`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const createCommits = async(query: Query) => {
    try {
        const data = await axios.post(`${import.meta.env.VITE_SERVER}/commits`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const getNewCommits = async(query: Query) => {
    try {
        const data = await axios.patch(`${import.meta.env.VITE_SERVER}/commits`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log('Error: ', error)
    }
}