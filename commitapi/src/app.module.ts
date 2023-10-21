import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QueriesModule } from './queries/queries.module';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`, {
      dbName: 'fullTimeForce'
    }),
    CommitsModule,
    QueriesModule],
})
export class AppModule {}
