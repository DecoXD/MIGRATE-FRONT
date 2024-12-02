# MIGRATE Frontend

MIGRATE é um website dedicado à venda de serviços de marketing, social media, desenvolvimento de sites e artes digitais. Este README fornece uma visão geral do front-end do projeto.

## Tecnologias Utilizadas

- **React** com **TypeScript**: Framework e linguagem para construção da interface do usuário.
- **Tailwind CSS**: Biblioteca de utilitários CSS para estilização rápida e responsiva.
- **React Router DOM**: Gerenciamento de rotas e navegação no aplicativo.
- **Shadcn**: Componentes UI para uma interface de usuário consistente e moderna.

## Funcionalidades Implementadas

- **Interface de Usuário**: Páginas de produtos e filtros.
- **Formulários**: Login e registro de usuários.
- **Carrinho de Compras**: Adição e visualização de produtos no carrinho.

## Estrutura do Projeto

```plaintext
migrate-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── tailwind.config.js
├── tsconfig.json
└── package.json
Como Executar o Projeto
Clone o repositório:
git clone https://github.com/seu-usuario/migrate-frontend.git
Instale as dependências:
cd migrate-frontend
npm install
Execute o projeto:
npm start
Próximas Implementações
Dashboard de Usuário e Admin
Páginas de Categorias de Produtos
Página de Pedidos
Contribuição
Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

Faça um fork do repositório.
Crie uma nova branch: git checkout -b minha-nova-feature
Faça suas alterações e commit: git commit -m 'Adiciona nova feature'
Envie para o repositório original: git push origin minha-nova-feature
Crie um pull request.
Licença
Este projeto está licenciado sob a MIT License.