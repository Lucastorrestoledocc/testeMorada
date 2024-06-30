Sistema de Saque em Node.js
Este projeto é um sistema de saque implementado em Node.js utilizando Express. Ele permite que um valor solicitado seja dividido em cédulas disponíveis e retorna a quantidade de cada cédula necessária.

Estrutura do Projeto :

controllers/saqueController.ts: Controlador responsável por realizar o saque.

routes/saque.ts: Define as rotas para o saque.

utils/calcularCedulas.ts: Função utilitária para calcular a quantidade de cédulas necessárias para um dado valor.

src/app.ts: Arquivo principal que configura e inicia o servidor Express.

test/saque.test.ts: Testes automatizados para o endpoint de saque.

Dependências :
Node.js 
Express
Chai (para asserções em testes)
Supertest (para testes de integração)


Instalação :
Clone o repositório para a sua máquina local.
sh
Copiar código
git clone <https://github.com/Lucastorrestoledocc/testeMorada.git>

Navegue até o diretório do projeto.
sh
Copiar código
cd nome-do-projeto

Instale as dependências do projeto.
sh
Copiar código
npm install
Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:
sh
Copiar código
npm start
O servidor estará rodando na porta 3000. Você pode acessar o endpoint de saque em http://localhost:3000/api/saque.

Estrutura de Diretórios
bash
src
├── controllers
│   └── saqueController.ts
├── routes
│   └── saque.ts
├── utils
│   └── calcularCedulas.ts
├── app.ts
test
└── saque.test.ts
package.json
tsconfig.json



Lógica do Projeto:

calcularCedulas.ts - Esta função calcula a quantidade de cada cédula necessária para um dado valor.
ts
Copiar código
export const calcularCedulas = (valor: number) => {
  const cedulas = [100, 50, 20, 10, 5, 2];
  const resultado: { [key: number]: number } = {};

  for (const cedula of cedulas) {
    resultado[cedula] = Math.floor(valor / cedula);
    valor %= cedula;
  }

  return resultado;
};



saqueController.ts - Controlador que lida com a lógica de saque. Verifica se o valor é válido e calcula a quantidade de cédulas necessárias.

ts
Copiar código
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


saque.ts - Define a rota para o endpoint de saque.

ts
Copiar código
import { Router } from 'express';
import { realizarSaque } from '../controllers/saqueController';

const router = Router();

router.post('/', realizarSaque);

export default router;

app.ts - Configura e inicia o servidor Express.
ts
Copiar código
import express from 'express';
import saqueRouter from './routes/saque';

const app = express();
const port = 3000; 

app.use(express.json()); 
app.use('/api/saque', saqueRouter); 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;


saque.test.ts - Testes automatizados para o endpoint de saque.
ts
Copiar código
import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app'; // ajuste o caminho conforme necessário

describe('POST /api/saque', () => {
  it('deve retornar a quantidade correta de cédulas', async () => {
    const res = await request(app)
      .post('/api/saque')
      .send({ valor: 380 });

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      100: 3,
      50: 1,
      20: 1,
      10: 1,
      5: 0,
      2: 0
    });
  });

  it('deve retornar erro para valor inválido', async () => {
    const res = await request(app)
      .post('/api/saque')
      .send({ valor: -50 });

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error', 'Valor inválido para saque');
  });
});


Executando Testes - Para executar os testes, use o comando:

sh
Copiar código
npm test


E isso, espero que gostem do projeto !