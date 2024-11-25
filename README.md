
# CoffeeShop Aplicação web

## 📋 Projeto
Este projeto é uma aplicação web para uma loja de café gourmet. Ele oferece funcionalidades completas, como exibição de produtos, gerenciamento de carrinho, login/cadastro de usuários, e processamento de pedidos.

---

## 🚀 Funcionalidades
1. **Página Inicial**:
   - Exibe os produtos disponíveis com nome, preço e imagens.
   - Possui modal de carrinho dinâmico.
2. **Autenticação**:
   - Login e cadastro de novos usuários com validações.
3. **Carrinho de Compras**:
   - Adicionar e remover itens ao carrinho.
   - Calcular automaticamente o total.
4. **Pedidos**:
   - Exibe os pedidos feitos pelos usuários.
5. **Administração**:
   - Painel de controle para o administrador gerenciar pedidos.
6. **Pagamento**:
   - Opções de pagamento com resumo do pedido.

---

## 🛠️ Tecnologias Utilizadas
- **Frontend**:
  - HTML, CSS, JavaScript
  - Bootstrap para responsividade
- **Backend**:
  - PHP para lógica do servidor
- **Banco de Dados**:
  - MySQL para persistência de dados

---

## 📂 Estrutura do Projeto
- `index.php`: Página inicial que exibe os produtos.
- `login.php`: Página de login para usuários.
- `register.php`: Página para cadastro de novos usuários.
- `payment.php`: Página de processamento de pagamento.
- `orders.php`: Página de exibição dos pedidos do usuário.
- `admin_dashboard.php`: Painel de controle do administrador.
- `add_to_cart.php`, `remove_from_cart.php`, `load_cart.php`: Gerenciamento do carrinho de compras.
- `db_connect.php`: Configuração da conexão com o banco de dados.
- `session_check.php`: Validação de sessões de usuário.
- `view_order.php`: Exibe detalhes de um pedido específico.
- `logout.php`: Faz o logout da aplicação.
- `script.js`: Funcionalidades dinâmicas do frontend.
- `style.css`: Estilização do site.

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Servidor local como XAMPP ou WAMP.
- Banco de dados MySQL configurado.

### Passos
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Coloque os arquivos na pasta `htdocs` do XAMPP.
3. Configure o banco de dados:
   - Crie um banco chamado `db_coffeeshop`.
   - Importe o arquivo SQL com as tabelas necessárias (caso já tenha).
4. Atualize o arquivo `db_connect.php` com as credenciais do seu banco.
5. Inicie o servidor Apache e MySQL no XAMPP.
6. Acesse no navegador:
   ```
   http://localhost/seu-projeto
   ```

---

## 👥 Colaboradores
- **Josimar**

---

## 📄 Licença
Este projeto é livre para uso e distribuição.

---

## 🛡️ Notas
- Este projeto é um protótipo e pode ser aprimorado com novas funcionalidades e melhorias.
