import { Body, ConflictException, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('queries')
export class QueryController {
    constructor(private queriesService: QueriesService) {}

    @Get()
    findAll() {
        try {
            return this.queriesService.findAll();
        } catch (error) {
            console.log(error)
        }
    }

    @Post()
    async create(@Body() body:CreateQueryDto) {
        try {
            return await this.queriesService.create(body)
        } catch (error) {
            console.log("error", error)
            if(error.code === 11000){
                throw new ConflictException('Query aleady exists')
            }
        }
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        try {
            return this.queriesService.delete(id)
        } catch (error) {
            console.log(error)
        }
    }
}
