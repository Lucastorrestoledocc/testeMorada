import { Request, Response } from 'express';
import { calcularCedulas } from '../utils/calcularCedulas';

export const realizarSaque = (req: Request, res: Response) => {
  const { valor } = req.body;
  if (typeof valor !== 'number' || valor <= 0) {
    return res.status(400).json({ error: 'Valor inválido para saque' });
  }

  const resultado = calcularCedulas(valor);
  res.json(resultado);
};
