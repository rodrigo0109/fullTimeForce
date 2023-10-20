import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @Get()
    findAllCommits() {
        return this.commitsService.findAllCommits()
    }

    @Get(':repo')
    findAll(@Param('repo') repo:string | null) {
        return this.commitsService.findAll(repo)
    }

    @Post()
    create(@Body() body:CreateQueryDto) {
        try {
            return this.commitsService.create(body)
        } catch (error) {
            console.log(error)
        }
    }
}
