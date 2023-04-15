import StudentRepository from "../repository/student.repository";
import { Student } from "../models/student.model"

class StudentsService {

    getAll() {
        return StudentRepository.getAll()
    }

    getByDocument(document: string) {
        return StudentRepository.getByDocument(document);
    }

    create(student: typeof Student) {
        return StudentRepository.create(student)
    }

    remove(document: string){
        return StudentRepository.remove(document)
    }

    update(document: string, student: Partial<typeof Student>) {
        return StudentRepository.update(document, student)
    }
}

export default new StudentsService();