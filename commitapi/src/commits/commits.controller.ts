import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @Get(':repo')
    findAll(@Param('repo') repo:string) {
        console.log("params que llegan", repo)
        return this.commitsService.findAll(repo)
    }

    @Post()
    create(@Body() body:CreateQueryDto) {
        return this.commitsService.create(body)
    }
}
