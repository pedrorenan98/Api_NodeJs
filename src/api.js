var Db = require('./controllers/dboperations');
const dboperations = require('./controllers/dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response, request } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
   // console.log('Operação feita com sucesso!!');
   next();
})

//GET all
router.route('/products').get((request, response) => {

   dboperations.getProducts().then(result => {
      response.json(result);
   })

})

//Get ProductsId
router.route('/products/:id').get((request, response) => {

   let id = request.params.id;

   dboperations.getProductsId(id).then(result => {
         response.json(result);
   })

})

//Insert Products
router.route('/create').post((request, response) => {

   let add = { ...request.body }
   console.log(add);
   dboperations.InsertProducts(add).then(result => {
      response.json(result);
   })

})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Api rodando em: http://localhost:' + port);



