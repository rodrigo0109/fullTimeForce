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
            const commits = await this.commitModel.find();
            return commits;
        } catch (error) {
            console.error("Error:", error);
        }
     }

    async findAll(repo: string) {
        try {
            const commits = await this.commitModel.find({ repo: repo });
            return commits;
        } catch (error) {
            console.error("Error:", error);
        }
     }
 
     async create(commitData: CreateQueryDto) {
         const commits = await processCommits(commitData);
         if(commits && commits.length > 0){
             const insertedCommits = await this.commitModel.insertMany(commits);
             return insertedCommits;
         }
     }

     async update(commitData: CreateQueryDto) {
        const newCommits = await processCommits(commitData)
        if (newCommits && newCommits.length > 0) {
            // Obtén los shas de los commits existentes en la base de datos
            const existingCommits = await this.commitModel.find({}, 'sha')
            const existingShaSet = new Set(existingCommits.map(commit => commit.sha))
        
            // Filtra los nuevos commits que no están en la base de datos
            const newCommitsToInsert = newCommits.filter(commit => !existingShaSet.has(commit.sha))
        
            if (newCommitsToInsert.length > 0) {
              // Inserta los nuevos commits en la base de datos
              const insertedCommits = await this.commitModel.insertMany(newCommitsToInsert)
              return insertedCommits
            }
          }
     }
 
}