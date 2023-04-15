import { student } from '../models/student.model'

class StudentsService {

    students: Array<student> = [
        {
            name: 'Davi Mattos',
            email: 'davi.mattos@mjv.com.br',
            document: '05677230707',
            password: '123456',
            age: 31
        },
        {
            name: 'João Silva',
            email: 'joao.silva@mjv.com.br',
            document: '08915576799',
            password: '01010101',
            age: 30
        },
        {
            name: 'Maria do Bairro',
            email: 'maria.bairro@gmail.com',
            document: '05686245899',
            password: '123456',
            age: 25
        },
        {
            name: 'Pedro Tiago',
            email: 'pedro.tiago@mjv.com.br',
            document: '05603230707',
            password: '123456',
            age: 23
        },
        {
            name: 'Laila Lima',
            email: 'laila.lima@mjv.com.br',
            document: '05677205607',
            password: '125669',
            age: 28
        },
    ];

    getAll() {
        return this.students;
    }

    getByDocument(document: string) {
        const student = this.students.find(student => student.document === document);
        return student;
    }

    create(student: student) {
        this.students.push(student)
    }

    remove(document: string){
        const studentIndex = this.students.findIndex((student) => student.document === document)
        if (studentIndex === -1) {
            throw new Error(`Estudante não encontrado para o cpf ${document}`);
        }
        this.students.splice(studentIndex, 1)
    }

    update(document: string, student: student) {
        const studentIndex = this.students.findIndex((student) => student.document === document)
        if (studentIndex === -1) {
            throw new Error(`Estudante não encontrado para o documento ${document}`)
        }
        this.students[studentIndex] = student
    }
}

export default new StudentsService();