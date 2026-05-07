const express=require('express');
const router=express.Router();
const {getAllProducts,AddProduct,DeleteProduct,UpdateProduct,getForm,getEditForm}=require('../controller/productController');

router.get('/',getAllProducts);
router.get('/add',getForm);
router.get('/edit/:id',getEditForm);
router.post('/create',AddProduct);
router.delete('/:id',DeleteProduct);
router.put('/update/:id',UpdateProduct);
module.exports=router;