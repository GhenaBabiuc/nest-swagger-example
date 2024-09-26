import {ApiProperty} from '@nestjs/swagger';

export class DeleteStudentResponseDto {
    @ApiProperty({example: 'Student successfully deleted', description: 'Confirmation message'})
    message: string;
}
