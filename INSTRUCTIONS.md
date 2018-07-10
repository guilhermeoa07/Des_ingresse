# Instruções de uso #

    Deve se ter o Node.js previamente instalado. 
    
    Uma vez clonado o projeto, o comando "npm install"
    em seguida executar o arquivo .\bin\server.js
    através do comando "node .\bin\server.js. 
    
# Instruções de rotas #

A porta especificada é a 3000, mas foi modulada caso esteja bloqueada.
verifique a porta informada ao iniciar o projeto.

##Usuarios

####Inserir
http://localhost:3000/ //acesso ao metodo post
####Buscar todos
http://localhost:3000/ //acesso ao metodo get
####Alterar
http://localhost:3000/:id //acesso ao metodo put
####Deletar
http://localhost:3000/:id //acesso ao metodo del
####Buscar pelo Slug
http://localhost:3000/:slug //acesso ao metodo getBySlug
####Buscar pelo ID
http://localhost:3000/admin/:id //acesso ao metodo getById
####Buscar pelo email
http://localhost:3000/email/:email //acesso ao metodo getByEmail


