import {ApiProperty} from '@nestjs/swagger';

export class UpdateStudentPayloadDto {
    @ApiProperty({example: 'John', description: 'The name of the student', required: false})
    name: string;

    @ApiProperty({
        example: 9.99,
        description: 'The average mark of the student',
        maximum: 10,
        minimum: 1,
        required: false
    })
    average_mark: number;
}
