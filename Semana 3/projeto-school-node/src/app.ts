import cors from 'cors';
import express from 'express';
import routes from './routers';

const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);

// app.use(healthRouter);

const port = 3000;

app.listen(port, () => {
    console.log('Aplicação online\nPorta: ', port);
});