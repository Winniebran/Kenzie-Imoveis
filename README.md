# Kenzie-Imoveis-Backend
Primeiro projeto back-end;

Deploy: https://k-imoveis.onrender.com; <br>
Status: *Em desenvolvimento*;

Descrição: Projeto back-end utilizando TypeORM, TypeScript, Express, Node, JWToken, Bcrypt e Yup onde é possível:
    
    1. Criar, listar, deletar e editar usuários;
    2. Não permite criar um usuário que já existe;
    3. Não permite listar, editar e excluir usuários sem autenticação e sem ser administrador;
    4. Não permite editar e excluir um usuário com ID inválido;
    5. Não permite editar os valores: Id, isAdm e isActive;
    6. Apenas administradores pode editar outro usuário além dele mesmo;
    7. Não permite deletar um usuário que já foi deletado.
