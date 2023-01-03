K Imóveis 

Deploy: https://k-imoveis-api.onrender.com;

Descrição: É um projeto *back-end* que foi produzido utilizando TypeScript, Node, Express, PostegreSQL, TypeORM, JWToken, Bcryptjs, Yup e Express-async-errors, onde:

- Users
    1. É possível criar um usuário;
    2. Não é permitido criar um usuário caso o email já esteja cadastrado;
    3. É possível listar, editar e deletar os usuários;
    4. Apenas é possível listar, deletar ou editar um outro usuário, caso tenha autenticação e seja administrador;
    5. Não permite deletar ou editar um usuário que não possui um id válido ou que já foi deletado;
    6. Não permite editar um usuário que não possui um id válido;
    7. Não permite editar os campos: isAdm, isActive e id de qualquer usuário.

- Login
    1. É possível realizar o login;
    2. Não é possível fazer o login com email ou senha incorretas;
    3. Não é possível logar com um usuário que foi deletado.

- Categories
    1. É possível criar uma categoria;
    2. Não é possível criar uma categoria que já exista;
    3. Apenas é possível criar uma categoria caso tenha autenticação e seja administrador;
    4. É possível listar todas as categorias;
    5. É possível listar todas as propriedades de uma determinada categoria;
    6. Apenas é possível listar todas as propriedades de uma determinada categoria caso essa categoria exista.

- Properties
    1. É possível criar uma propriedade;
    2. Não é possível criar uma propriedade que já exista;
    3. Apenas é possível criar uma propriedade caso tenha autenticação e seja administrador;
    4. Não é possível criar uma propriedade com categoria, cep ou estado inválidos;
    5. É possível listar todas as propriedaeds.

- Schedules
    1. É possível criar um agendamento;
    2. Apenas é possível criar um agendamento caso tenha autenticação e seja administrador;
    3. O usuário não pode criar dois agendamento iguais na mesma propriedade;
    4. O usuário não pode criar dois agendamentos na mesma data e horário em propriedades diferentes;
    5. Não é possível criar um agendamento com data inválida, fora do horário comercial (8h - 18h) ou em uma propriedade que não exista;
    6. É possível listar todas os agendamentos de uma propriedade;
    7. Apenas é possível listar os agendamentos de uma propriedade, caso o usuário tenha autenticação e seja administrador;
    8. Não é possível listar os agendamentos de uma propriedade inexistente.