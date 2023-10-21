import axios from "axios"

interface Query {
    owner: string;
    repo: string;
}

const headers = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${token}` 
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