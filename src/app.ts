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
