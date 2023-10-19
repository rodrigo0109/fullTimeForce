import { Module } from '@nestjs/common';
import { QueryController } from './queries.controller';
import { QueriesService } from './queries.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Queries, QueriesSchema } from 'src/schemas/queries.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Queries.name,
        schema: QueriesSchema,
      },
    ]),
  ],
  controllers: [QueryController],
  providers: [QueriesService]
})
export class QueriesModule {}
