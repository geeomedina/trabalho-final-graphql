const Produto = require ('./Produto')
const Mutation = require ('./Mutation')

const admin = require("firebase-admin");

module.exports = {
    Query: Produto,
    Mutation: Mutation
}

