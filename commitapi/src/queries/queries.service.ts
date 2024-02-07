import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueryDto } from '../dto/create-query.dto';
import { Queries } from '../schemas/queries.schema';
import { Commit } from '../schemas/commit.schema';

@Injectable()
export class QueriesService {
    constructor(
        @InjectModel(Queries.name) private queriesModel: Model<Queries>,
        @InjectModel(Commit.name) private commitModel: Model<Commit>    
    ) {}

    findAll() {
        return this.queriesModel.find();
     }

    async create(createQuery: CreateQueryDto) {
        const newQuery = new this.queriesModel(createQuery);
        await newQuery.save();

        const queries = await this.queriesModel.find().sort({ createdAt: 1 }) //ordeno por creacion

        if(queries.length > 5) { //si es mayor a 5 elimino el mas antiguo - esto se puede extraer
            const oldestQueryId = queries[0]._id
            const repoName = queries[0].repo

            await this.queriesModel.findByIdAndDelete(oldestQueryId)
            await this.commitModel.deleteMany({ repo: repoName })
        }
    }

    async delete(id: string) {
        await this.queriesModel.findByIdAndDelete(id);
    }
}
