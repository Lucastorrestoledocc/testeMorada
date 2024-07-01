<h1>Sistema de Saque em Node.js</h1>

<p>Este projeto é um sistema de saque implementado em Node.js utilizando Express. Ele permite que um valor solicitado seja dividido em cédulas disponíveis e retorna a quantidade de cada cédula necessária.</p>

<h2>Estrutura do Projeto</h2>
<ul>
  <li><code>controllers/saqueController.ts</code>: Controlador responsável por realizar o saque.</li>
  <li><code>routes/saque.ts</code>: Define as rotas para o saque.</li>
  <li><code>utils/calcularCedulas.ts</code>: Função utilitária para calcular a quantidade de cédulas necessárias para um dado valor.</li>
  <li><code>src/app.ts</code>: Arquivo principal que configura e inicia o servidor Express.</li>
  <li><code>test/saque.test.ts</code>: Testes automatizados para o endpoint de saque.</li>
</ul>

<h2>Dependências</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Chai (para asserções em testes)</li>
  <li>Supertest (para testes de integração)</li>
</ul>

<h2>⚙️ Instalação</h2>
<p>Clone o repositório para a sua máquina local</p>
<pre><code>
sh
Copiar código
git clone https://github.com/Lucastorrestoledocc/testeMorada.git
</code></pre>

<p>Navegue até o diretório do projeto.</p>
<pre><code>
sh
Copiar código
cd testeMorada
</code></pre>

<p>❗❗❗ Instale as dependências do projeto ❗❗❗</p>
<pre><code>
npm install
</code></pre>

<h2>Executando o Projeto</h2>
<p>Para iniciar o servidor, execute os seguintes comandos:</p>
<pre><code>
sh
Copiar código
npm start
</code></pre>
<p>O servidor estará rodando na porta 3000. Você pode acessar o endpoint de saque em <a href="http://localhost:3000/api/saque">http://localhost:3000/api/saque</a>.</p>

<h2>Testando o Endpoint</h2>
<p>Use <code>curl</code> no terminal para testar o endpoint:</p>
<pre><code>
curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:3000/api/saque
</code></pre>

<h2>Considerações Finais</h2>
<p>Este projeto foi desenvolvido para simular um caixa eletrônico simples. A lógica foi otimizada para garantir a menor quantidade de cédulas possíveis para qualquer valor de saque permitido. Quaisquer dúvidas ou problemas, por favor, abra uma issue no repositório.</p>
