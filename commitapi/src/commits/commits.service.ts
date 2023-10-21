import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Commit } from '../schemas/commit.schema'
import { Model } from 'mongoose';
import { CreateQueryDto } from 'src/dto/create-query.dto';
import { processCommits } from './utils';

@Injectable()
export class CommitsService {
    constructor(@InjectModel(Commit.name) private commitModel: Model<Commit>) {}

    async findAllCommits() {
        try {
            const commits = await this.commitModel.find()
            return commits
        } catch (error) {
            console.error("Error:", error)
        }
     }

    async findAll(repo: string) {
        try {
            const commits = await this.commitModel.find({ repo: repo })
            return commits
        } catch (error) {
            console.error("Error:", error)
        }
     }
 
     async create(commitData: CreateQueryDto) {
         const commits = await processCommits(commitData)
         if(commits && commits.length > 0){
             const insertedCommits = await this.commitModel.insertMany(commits)
             return insertedCommits;
         }
     }

     async update(commitData: CreateQueryDto) {
        const newCommits = await processCommits(commitData)
        if (newCommits && newCommits.length > 0) {
            const existingCommits = await this.commitModel.find({}, 'date')
            const existingShaSet = new Set(existingCommits.map(commit => commit.date))
        
            const newCommitsToInsert = newCommits.filter((commit:any) => !existingShaSet.has(commit.date))
        
            if (newCommitsToInsert.length > 0) {
              await this.commitModel.insertMany(newCommitsToInsert)
              const insertedCommits = await this.commitModel.updateMany({}, { $sort: { date: 1 } })
              return insertedCommits
            }
          }
     }
 
}