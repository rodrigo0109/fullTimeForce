import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    create(@Body() body:CreateQueryDto) {
        console.log("body", body)
        return this.queriesService.create(body)
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.queriesService.delete(id)
    }
}
