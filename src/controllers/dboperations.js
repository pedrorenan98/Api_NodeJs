var config = require('../service/dbconfig');
const {
    Pool, Client
} = require('pg');

const { request, response } = require('express');
const { json } = require('body-parser');


//GET ALL BASES
async function getProducts() {
    try {

        const client = new Client(config);
        await client.connect();
        let products = await client.query("SELECT * FROM PRODUCT");
        await client.end();
        return products.rows;

    }
    catch (error) {
        return error;
    }
}

async function getProductsId(productId) {
    try {

        const client = new Client(config);
        await client.connect();
        let product = await client.query("SELECT * FROM PRODUCT Where Product_id = $1", [productId])
        await client.end();
     
        return product.rows;
    }
    catch (error) {
        return error;
    }
}
//Insert Product
async function InsertProducts(add) {
    try {

        const client = new Client(config);
        
        await client.connect();

        await client.query("INSERT INTO PRODUCT (Product_Name, Procuct_Preco) VALUES ($1,$2)",[add.name,add.preco]);

        await client.end();
        
        return true
    }
    catch (error) {
        return error
    }
}


module.exports = {
    getProducts: getProducts,
    getProductsId: getProductsId,
    InsertProducts: InsertProducts

}