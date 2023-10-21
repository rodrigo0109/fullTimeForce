import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CreateQueryDto } from 'src/dto/create-query.dto';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @Get()
    findAllCommits() {
        try {
            return this.commitsService.findAllCommits()
        } catch (error) {
            console.log(error)
        }
    }

    @Get(':repo')
    findAll(@Param('repo') repo:string | null) {
        try {
            return this.commitsService.findAll(repo)
        } catch (error) {
            console.log(error)
        }
    }

    @Post()
    create(@Body() body:CreateQueryDto) {
        try {
            return this.commitsService.create(body)
        } catch (error) {
            console.log(error)
        }
    }

    @Patch()
    update(@Body() body: CreateQueryDto) {
        try {
            return this.commitsService.update(body)
        } catch (error) {
            console.log(error)
        }
    }
}
