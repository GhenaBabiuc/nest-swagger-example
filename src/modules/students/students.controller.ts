import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {CreateStudentPayloadDto} from './dto/create.student.payload.dto';
import {CreateStudentResponseDto} from './dto/create.student.response.dto';
import {UpdateStudentPayloadDto} from './dto/update.student.payload.dto';
import {DeleteStudentResponseDto} from './dto/delete.student.response.dto';
import {StudentService} from './students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentService) {
    }

    @Post()
    @ApiOperation({summary: 'Create a new student'})
    @ApiOkResponse({
        status: 201,
        description: 'The student has been successfully created.',
        type: CreateStudentResponseDto
    })
    @ApiInternalServerErrorResponse({description: 'Internal server error'})
    create(@Body() student: CreateStudentPayloadDto) {
        const createdStudent = {
            id: student.id,
            name: student.name,
            average_mark: student.average_mark,
            created_at: new Date(),
            updated_at: new Date(),
        };
        this.studentService.create(createdStudent);
        return createdStudent;
    }

    @Get()
    @ApiOperation({summary: 'Get all students'})
    @ApiOkResponse({status: 200, description: 'List of all students', type: [CreateStudentResponseDto]})
    findAll() {
        return this.studentService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get a student by ID'})
    @ApiOkResponse({status: 200, description: 'The found student', type: CreateStudentResponseDto})
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update a student'})
    @ApiOkResponse({status: 200, description: 'The updated student', type: CreateStudentResponseDto})
    update(@Param('id', ParseIntPipe) id: number, @Body() student: UpdateStudentPayloadDto) {
        return this.studentService.update(id, student);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Remove a student'})
    @ApiOkResponse({status: 200, description: 'The student has been removed', type: DeleteStudentResponseDto})
    remove(@Param('id', ParseIntPipe) id: number) {
        this.studentService.remove(id);
        return {message: 'Student successfully deleted'};
    }
}
