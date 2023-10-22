import axios from "axios"
import { CreateQueryDto } from "src/dto/create-query.dto"

export const processCommits = async(commitData: CreateQueryDto) => {
    try {
        const data:[] = (await axios.get(`https://api.github.com/repos/${commitData.owner}/${commitData.repo}/commits?per_page=100`)).data
        let dataTransformed:any = data.length > 0 && data.map((d:any, i:number) => ({
            sha: d.sha,
            author: d.author.login,
            repo: commitData.repo,
            avatar: d.author.avatar_url,
            url: d.author.html_url,
            commitUrl: d.html_url,
            message: d.commit.message,
            date: d.commit.author.date,
        }))
        return dataTransformed
    } catch (error) {
        console.log(error)
    }
}