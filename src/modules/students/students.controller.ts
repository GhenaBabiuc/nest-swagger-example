import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateStudentPayloadDto } from './dto/create.student.payload.dto';
import { CreateStudentResponseDto } from './dto/create.student.response.dto';
import { studentService } from './students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {

  constructor(private readonly studentService: studentService) {
  }

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiOkResponse({
    status: 201,
    description: 'The student has been successfully created.',
    type: CreateStudentResponseDto,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() student: CreateStudentPayloadDto): CreateStudentResponseDto {
    let createdStudent: CreateStudentResponseDto;

    createdStudent = {
      id: '999',
      name: student.name,
      average_mark: student.average_mark,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return createdStudent;
  }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  findAll() {
    return [
      {
        id: 1,
        name: 'John',
        average_mark: 9.99,
      },
    ];
  }

  @Get(':id')
  findOne() {
    return 'This action returns one student';
  }

  @Put(':id')
  update() {
    return 'This action updates a student';
  }

  @Delete(':id')
  remove() {
    return 'This action removes a student';
  }
}
