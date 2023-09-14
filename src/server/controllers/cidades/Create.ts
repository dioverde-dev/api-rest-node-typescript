import { Request, Response } from 'express';

import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const CidadeSchema = yup.object().shape({
  nome: yup.string().required().min(3),

});


export const create = (req: Request<{}, {}, ICidade > , res: Response) => {
  console.log(req.body);


 
  return res.send('Create');
};

