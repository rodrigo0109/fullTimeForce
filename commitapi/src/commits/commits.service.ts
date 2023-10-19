import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Commit } from '../schemas/commit.schema'
import { Model } from 'mongoose';
import { CreateQueryDto } from 'src/dto/create-query.dto';
import { processCommits } from './utils';

@Injectable()
export class CommitsService {
    constructor(@InjectModel(Commit.name) private commitModel: Model<Commit>) {}

    async findAll(repo: string) {
        try {
            const commits = await this.commitModel.find({ repo: repo });
            return commits;
        } catch (error) {
            console.error("Error:", error);
        }
     }
 
     async create(commitData: CreateQueryDto) {
        try {
            const commits = await processCommits(commitData);
            if(commits && commits.length > 0){
                const insertedCommits = await this.commitModel.insertMany(commits);
                console.log("dataaaa", insertedCommits)
                return insertedCommits;
            } else {
                return 'No commits found';
            }
        } catch (error) {
            console.error("Error:", error);    
        }
     }
 
}