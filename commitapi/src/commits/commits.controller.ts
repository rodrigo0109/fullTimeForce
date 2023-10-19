import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @Get(':id/:owner')
    findOne(@Param('id') id:string, @Param('owner') owner:string) {
        console.log("params que llegan", id, owner)
        return 'Devuelvo data'
    }

    @Post()
    create(@Body() body:CreateQueryDto) {
        return this.commitsService.create(body)
    }
}
