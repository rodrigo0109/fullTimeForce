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

export const createQueryRequest = async(query: Query) => {
    const data = axios.post(`${API}/queries`, JSON.stringify(query), headers())
    return data
}

export const createCommits = async(query: Query) => {
    try {
        const data = await axios.post(`${API}/commits`, JSON.stringify(query), headers())
        return data    
    } catch (error) {
        console.log('Error: ', error)
    }
}