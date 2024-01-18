import { Injectable, HttpException, Inject } from '@nestjs/common';
import { resolve } from 'path';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from './interfaces/student.interface';
import { StudentDTO } from './students.dto'

//injectable decorator. It makes my service injectable. So we can inject it into the constructor of the controller
@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model<IStudent>){}

    public async getStudents(): Promise <StudentDTO[]>{
        const students = await this.studentModel.find().exec();
        if(!students || !students[0]){
            throw new HttpException('Not Found', 404);
        }
        return students;
    }

    public async postStudents(newStudent: StudentDTO){ 
        const student = await new this.studentModel(newStudent);
        return student.save();

    }

    public async getStudentsByID(id: number): Promise <StudentDTO>{ 
        const student = await this.studentModel.findOne({ id }).exec();
        if(!student){
            throw new HttpException('Not Found', 404);
        }
        return student;
    }

    public async deleteStudentsByID(id: number): Promise <any>{ //StudentDTO
        const student = await this.studentModel.deleteOne({ id }).exec();
        if(student.deletedCount === 0 ){
            throw new HttpException('Not Found', 404);
        }
        return student;
    }

    public async putStudentsByID(        
        id: Number,
        propertyName: string,
        property_value: string,
        ): Promise <StudentDTO> {
            const student = await this.studentModel
                .findOneAndUpdate(
                    { id }, 
                    {
                    [propertyName]: property_value,
                    },
                )
            if(!student){
                throw new HttpException('Not Found', 404);
            }
            return student;
    }
}
