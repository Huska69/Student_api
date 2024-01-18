import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/student_manager'),
    StudentModule,
  ],
})
export class AppModule {}
