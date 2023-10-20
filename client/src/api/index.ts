import axios from "axios"

const API = 'http://localhost:3000'

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
        const data = await axios.get(`${API}/queries`, headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const getCommits = async() => {
    try {
        const data = await axios.get(`${API}/commits`, headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const createQueryRequest = async(query: Query) => {
    try {
        const data = await axios.post(`${API}/queries`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log(error)
    }
}

export const createCommits = async(query: Query) => {
    try {
        const data = await axios.post(`${API}/commits`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log('Error: ', error)
    }
}