K Imóveis 

Deploy: https://k-imoveis-api.onrender.com;

## Descrição: 

O Kenzie Imóveis API é uma poderosa API desenvolvida com recursos como autenticação, permissões e validações. Ela oferece uma variedade de recursos para gerenciar usuários, categorias, propriedades e agendamentos de forma segura e eficiente. Algumas das principais funcionalidades incluem:

### Gerenciamento de Usuários:
- Permite criar novos usuários com verificação de email duplicado.
- Fornece operações de listagem, edição e exclusão de usuários.
- Apenas usuários autenticados e administradores têm permissão para executar ações em outros usuários.
- Restringe a edição de campos sensíveis como "isAdm", "isActive" e "id".

### Autenticação e Login:
- Permite que os usuários façam login na API.
- Verifica se o email e a senha fornecidos estão corretos.
- Impede o login de usuários excluídos.

### Gerenciamento de Categorias:
- Permite criar novas categorias com verificação de duplicidade.
- Apenas usuários autenticados e administradores têm permissão para criar categorias.
- Fornece operações de listagem de todas as categorias e listagem das propriedades de uma categoria específica.

### Gerenciamento de Propriedades:
- Permite criar novas propriedades com validações rigorosas.
- Apenas usuários autenticados e administradores têm permissão para criar propriedades.
- Garante a integridade dos dados ao verificar a validade de categoria, CEP e estado.
- Oferece operação de listagem de todas as propriedades disponíveis.

### Agendamentos:
- Permite criar novos agendamentos com controle avançado.
- Apenas usuários autenticados e administradores têm permissão para criar agendamentos.
- Evita a criação de agendamentos duplicados na mesma propriedade.
- Impede agendamentos com datas inválidas, fora do horário comercial ou em propriedades inexistentes.
- Fornece operações de listagem de todos os agendamentos de uma propriedade específica.

Em resumo, o Kenzie Imóveis API é uma solução completa e segura para gerenciar usuários, categorias, propriedades e agendamentos. É uma ferramenta essencial para aplicativos e plataformas imobiliárias, fornecendo recursos avançados e garantindo a integridade dos dados.

## Tecnologias Utilizadas
- TypeScript; 
- Node; 
- Express; 
- PostegreSQL; 
- TypeORM; 
- JWToken; 
- Bcryptjs; 
- Yup;
- Express-async-errors;
