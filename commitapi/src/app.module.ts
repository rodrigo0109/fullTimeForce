import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://myAtlasDBUser:mongo2024@myatlasclusteredu.eyw7zzd.mongodb.net/`, {
      dbName: 'test'
    }),
    CommitsModule],
})
export class AppModule {}
