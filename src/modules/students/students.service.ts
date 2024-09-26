import {Injectable} from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {
            id: 1,
            name: 'Elon Musk',
            average_mark: 10,
        }, {
            id: 2,
            name: 'Jersey',
            average_mark: 9,
        }, {
            id: 3,
            name: 'Milk',
            average_mark: 9,
        },
    ];

    findAll() {
        return this.students;
    }

    findOne(id: number) {
        return this.students.find(item => item.id === id);
    }

    create(item: any) {
        this.students.push(item);
        return item;
    }

    update(id: number, student: any) {
        const index = this.students.findIndex(item => item.id === id);
        if (index > -1) {
            this.students[index] = {...this.students[index], ...student};
            return this.students[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.students.findIndex(item => item.id === id);
        if (index > -1) {
            return this.students.splice(index, 1);
        }
        return null;
    }
}