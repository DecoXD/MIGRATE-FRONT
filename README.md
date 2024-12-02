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
```
## Instalação e Uso

1. Clone o repositório:
   ```bash
    git clone https://github.com/seu-usuario/migrate-frontend.git
    ```

2.Instale as dependências:
  ```bash
    cd migrate-frontend
  ```
  ```bash  
    npm install
  ```
3.Execute o projeto:
  ```bash
    npm start
  ```
Próximas Implementações
Dashboard de Usuário e Admin
Páginas de Categorias de Produtos
Página de Pedidos
Contribuição
Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

Faça um fork do repositório.
1. Crie uma nova branch:
 ```bash
 git checkout -b minha-nova-
 ```
2. Faça suas alterações e commit:
 ```bash
 git commit -m 'Adiciona nova feature'
 ```
Envie para o repositório original: 
 ```bash
git push origin minha-nova-feature
 ```
Crie um pull request.
Licença
Este projeto está licenciado sob a MIT License.