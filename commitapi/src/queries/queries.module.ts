import { Module } from '@nestjs/common';
import { QueryController } from './queries.controller';
import { QueriesService } from './queries.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Queries, QueriesSchema } from '../schemas/queries.schema';
import { Commit, CommitSchema } from '../schemas/commit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Queries.name, schema: QueriesSchema },
      { name: Commit.name, schema: CommitSchema }
    ]),
  ],
  controllers: [QueryController],
  providers: [QueriesService]
})
export class QueriesModule {}
