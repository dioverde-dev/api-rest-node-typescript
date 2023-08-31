import {Router} from 'express';
import { StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req, res) =>{
  return res.send('Olá,dev!');
});

router.post('/', (req, res) =>{
  console.log(req.body);
  return res.status(StatusCodes.ACCEPTED).json('Olá,dev!');
});


export { router };