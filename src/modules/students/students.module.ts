import {Module} from '@nestjs/common';
import {StudentsController} from './students.controller';
import {StudentService} from "./students.service";

@Module({
    controllers: [StudentsController],
    providers: [StudentService],
})
export class StudentsModule {
}
