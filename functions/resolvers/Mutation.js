const admin = require("firebase-admin");

module.exports = {
    novoProduto(_, { id, nomeproduto, descricao, fornecedor, preco, datacadastro }) {

        const novo = {
            id: id,
            nomeproduto: nomeproduto,
            descricao: descricao,
            fornecedor: fornecedor,
            preco: preco,
            datacadastro: datacadastro,
        };

        admin.database()
        .ref("produtos")
        .push(novo);

        return admin
        .database()
        .ref("produtos")
        .limitToLast(1)
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]));
    },
    atualizarProduto(_, { id, nomeproduto, descricao, fornecedor, preco, datacadastro }) {

        const ref = admin.database().ref("produtos");

        return ref
        .orderByChild("id")
        .equalTo(id)
        .once("value")
        .then((snap) => {
            return snap.val();
        })
        .then((val) => {
            if (val) {
                const firstKey = Object.keys(val)[0];
                let produto = val[firstKey];
                produto.nomeproduto = nomeproduto;
                produto.descricao = descricao;
                produto.fornecedor = fornecedor;
                produto.preco = preco;
                produto.datacadastro = datacadastro;

                ref.child(firstKey).set(produto);
                return produto;
            }
        });
    },
    excluirProduto(_, { id }) {

        const ref = admin.database().ref("produtos");

        return ref
        .orderByChild("id")
        .equalTo(id)
        .once("value")
        .then((snap) => {
            return snap.val();
        })
        .then((val) => {
            if (val) {
                const firstKey = Object.keys(val)[0];
                const produto = val[firstKey];
                ref.child(firstKey).remove();
                return produto;
            }
        });
    }
};