import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Commit, CommitSchema } from '../schemas/commit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Commit.name,
        schema: CommitSchema,
      },
    ]),
  ],
  controllers: [CommitsController],
  providers: [CommitsService]
})
export class CommitsModule {}
