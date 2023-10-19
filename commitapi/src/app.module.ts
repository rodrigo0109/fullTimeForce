import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QueriesModule } from './queries/queries.module';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@myatlasclusteredu.eyw7zzd.mongodb.net/`, {
      dbName: 'fullTimeForce'
    }),
    CommitsModule,
    QueriesModule],
})
export class AppModule {}
