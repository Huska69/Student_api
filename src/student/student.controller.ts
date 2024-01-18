import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {StudentService} from './student.service';
import {StudentDTO} from './students.dto';
import { query } from 'express';

@Controller('student') //student route
export class StudentController {
    constructor(private studentService: StudentService) {}

    @Get() //this means im calling the get method on this student route
    public getStudents(){
        return this.studentService.getStudents();
    }

    @Post()
    public postStudents(@Body() student: StudentDTO ) {
        return this.studentService.postStudents(student);
    }

    @Get(':id')
    public async getStudentsByID(@Param('id') id: number) {
        const result = await this.studentService.getStudentsByID(id);
        return result;
    }

    @Delete(':id')
    public async deleteStudentsByID(@Param('id') id: number) {
       const result = await this.studentService.deleteStudentsByID(id);
       return result;
    }

    @Put(':id')
    public async putStudentsByID(@Param('id') id: number, @Query() query) {
        const property_name = query.property_name;
        const property_value = query.property_value;
        const result = await this.studentService.putStudentsByID(id, property_name, property_value);
        return result;
    }

}
