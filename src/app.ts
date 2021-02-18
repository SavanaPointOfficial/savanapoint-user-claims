import  express  from 'express';
import morgan from 'morgan';
import cors  from 'cors';
import './db/db';




 




const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


import { router } from './routes/routes';


app.use('/api',router);


module.exports = app;