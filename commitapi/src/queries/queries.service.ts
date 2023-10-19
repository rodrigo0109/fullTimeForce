import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueryDto } from 'src/dto/create-query.dto';
import { Queries } from 'src/schemas/queries.schema';

@Injectable()
export class QueriesService {
    constructor(@InjectModel(Queries.name) private queriesModel: Model<Queries>) {}

    findAll() {
        return this.queriesModel.find();
     }

    create(createQuery: CreateQueryDto) {
        const newQuery = new this.queriesModel(createQuery);
        return newQuery.save();
    }

    async delete(id: string) {
        return this.queriesModel.findByIdAndDelete(id);
    }
}
