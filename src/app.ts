import express from 'express';
import saqueRouter from './routes/saque';

const app = express();
const port = 3000; // Porta onde o servidor está rodando

app.use(express.json()); // Middleware para processar JSON
app.use('/api/saque', saqueRouter); // Usando o roteador para a rota /api/saque

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;
