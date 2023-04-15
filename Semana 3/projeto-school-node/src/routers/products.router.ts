import { Request, Response, Router } from 'express'
import ProductService from '../services/products.service'

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = ProductService.getAll();
    res.send(products)
})

router.get('/:id', (req: Request, res: Response) => {
    const product = ProductService.getByid(Number(req.params.id))

    if (product == null || undefined) {
        return res.status(204).send()
    }
    res.status(200).send(product)
})

router.post('/', (req: Request, res: Response) => {
    ProductService.create(req.body)
    res.status(201).send({ success: `Produto cadastrado com sucesso.`})
})

router.delete('/remove/:id', (req: Request, res: Response) => {
    try {
        ProductService.remove(Number(req.params.id));
        res.status(200).send({ message: "Produto removido com sucesso." })
    } catch (error: any) {
        res.status(400).send({ message : error.message });
    }    
})

router.put('/update/:id', (req: Request, res: Response) => {
    try {
        ProductService.update(Number(req.params.id), req.body)
        res.status(200).send({ message: `Produto atualizado com sucesso.`})
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }    
})

export default router;