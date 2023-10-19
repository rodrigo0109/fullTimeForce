import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Commit } from '../schemas/commit.schema'
import { Model } from 'mongoose';
import { CreateQueryDto } from 'src/dto/create-query.dto';
import axios from 'axios';

@Injectable()
export class CommitsService {
    constructor(@InjectModel(Commit.name) private commitModel: Model<Commit>) {}

    findAll() {
        return this.commitModel.find();
     }
 
     async create(createCommit: CreateQueryDto) {
        try {
            console.log("body", createCommit)
            const data:[] = (await axios.get(`https://api.github.com/repos/rodrigo0109/clases_canto/commits`)).data
            let dataTransformed = data.map((d:any) => ({
                sha: d.sha,
                author: d.author.login,
                avatar: d.author.avatar_url,
                url: d.author.html_url,
                message: d.commit.message,
                date: d.commit.author.date
            }))
            return console.log("data", dataTransformed)
        } catch (error) {
            console.error("Error:", error);    
        }
     }
 
     async findOne(id: string) {
         return this.commitModel.findById(id);
     }
 
     async delete(id: string) {
         return this.commitModel.findByIdAndDelete(id);
     }
 
}
