import { Request, Response, Router } from 'express'

const router = Router();

const students = [
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

router.get('/', (req: Request, res: Response) => {
    res.send(students)
});

router.get('/:document', (req: Request, res: Response) => {
    const std = students.find(student => student.document === req.params.document)
    
    if (std == null || undefined) {
        console.log('is '+ std);
        
        return res.status(204).send()
    }
    res.status(200).send(std)
});

router.post('/', (req: Request, res: Response) => {
    if (req.body.age < 18) {
        return res.status(401).send({
            message: "Estudante não registrado.\nMotivo: Idade menor que 18"
        })
    }
    students.push(req.body)
    res.status(201).send({
        message: "Estudante registrado com sucesso.",
        student: req.body
    })
});

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document)
    console.log(studentIndex + ' : ' + req.params.document);
    
    if (studentIndex === -1) {
        return res.status(400).send({ message: `Estudante não encontrado para o cpf ${req.params.document}` })
    }
    students.splice(studentIndex, 1)
    res.status(200).send({ message: "Estudante removido com sucesso." })
})

router.put('/update/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document)
    if (studentIndex === -1) {
        return res.status(400).send({ message: `Estudante não encontrado para o cpf ${req.params.document}` })
    }
    students[studentIndex] = req.body
    res.status(200).send({ message: `Estudante ${students[studentIndex].name} atualizado com sucesso.`})
})

export default router;