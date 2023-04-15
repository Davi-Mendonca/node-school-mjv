import cors from 'cors';
import express from 'express';
import routes from './routers';
import connection from './config/database'

const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);

// app.use(healthRouter);

const port = 3000;

connection.then(() => {
    console.log('Banco de dados Online.');
    
    app.listen(port, () => {
        console.log('Aplicação online\nPorta: ', port);
    });
}).catch((err) => console.log(err))