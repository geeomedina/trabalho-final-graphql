# CRUD com GraphQL e Firebase, utilizando NodeJS.

- Instale os pacotes na pasta raiz e em /functions;
```
npm install 
```

- Logue no Firebase;
```
firebase login
```

- Inicie o projeto na pasta raiz:
```
firebase serve
```

### Consulta e mutações:

Consulta:
```
{
  produto {
    id
    nomeproduto
    descricao
    fornecedor
    preco
    datacadastro
  }
}
```

Inserir novo produto:
```
mutation {
  novoProduto(
    id: 6
    nomeproduto: "Placa de Vídeo"
    descricao: "Placa de vídeo RTX 2060"
    fornecedor: "Nvidia"
    preco: 2599.90
    datacadastro: "23/12/2020"
  ){
    id
    nomeproduto
    descricao
    fornecedor
    preco
    datacadastro
  }
}
```

Atualizar produto existente:
```
mutation {
  atualizarProduto(
    id: 1
    nomeproduto: "Mouse"
    descricao: "Mouse sem fio"
    fornecedor: "LG"
    preco: 150.20
    datacadastro: "23/12/2020"
  ){
    id
    nomeproduto
    descricao
    fornecedor
    preco
    datacadastro
  }
}
```

Excluir produto:
```
mutation {
  excluirProduto(
    id: 6
  ){
    id
  }
}
```