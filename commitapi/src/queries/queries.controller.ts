import { Body, ConflictException, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('queries')
export class QueryController {
    constructor(private queriesService: QueriesService) {}

    @Get()
    findAll() {
        return this.queriesService.findAll();
    }

    @Post()
    async create(@Body() body:CreateQueryDto) {
        try {
            return await this.queriesService.create(body)
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Query aleady exists')
            }
        }
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.queriesService.delete(id)
    }
}
