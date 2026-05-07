const  express=require('express');
const { createOrder,DeleteOrder,UpdateOrder,getForm}=require('../controller/ordersController');
const router=express.Router();
router.get('/create',getForm);
router.post('/add',createOrder);
router.put('/:id',UpdateOrder);
router.delete('/:id',DeleteOrder);
module.exports=router;