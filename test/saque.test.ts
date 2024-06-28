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
