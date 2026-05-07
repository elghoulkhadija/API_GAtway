const ModelOrder = require('../models/Order');
const ModelProduct = require('../models/product');

exports.getForm = async (req, res) => {
    try {
        const products = await ModelProduct.find();
        const selectedProductId = req.query.product || null;

        let selectedProduct = null;
        if (selectedProductId) {
            selectedProduct = await ModelProduct.findById(selectedProductId);
        }

        res.render('Addorders', { products, selectedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createOrder = async (req, res) => {
    try {
        console.log("req.body:", req.body);
        await ModelOrder.create({
            productId: req.body.productId,
            quantity: req.body.quantity
        });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getEditForm = async (req, res) => {
    try {
        const order = await ModelOrder.findById(req.params.id);
        const product = await ModelProduct.findById(order.productId);
        res.render('EditOrders', { order, product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.UpdateOrder = async (req, res) => {
    try {
        await ModelOrder.findByIdAndUpdate(req.params.id, {
            quantity: req.body.quantity
        }, { new: true });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.DeleteOrder = async (req, res) => {
    try {
        await ModelOrder.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};