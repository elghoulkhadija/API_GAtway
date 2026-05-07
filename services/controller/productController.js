const ModelProduct = require('../models/product');
const ModelOrder = require('../models/Order');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ModelProduct.find();
        const orders = await ModelOrder.find();

        const data = products.map(product => {
            const order = orders.find(o => o.productId === product._id.toString());
            return {
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: order ? order.quantity : 0,
                orderId: order ? order._id : null
            };
        });

        res.render('index', { products: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error products" });
    }
};

exports.getForm = (req, res) => {
    res.render('Addproduct');
};

exports.AddProduct = async (req, res) => {
    try {
        await ModelProduct.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error products" });
    }
};

exports.getEditForm = async (req, res) => {
    try {
        const product = await ModelProduct.findById(req.params.id);
        res.render('Editproduct', { product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error products" });
    }
};

exports.UpdateProduct = async (req, res) => {
    try {
        await ModelProduct.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }, { new: true });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error products" });
    }
};

exports.DeleteProduct = async (req, res) => {
    try {
        await ModelProduct.findByIdAndDelete(req.params.id);
        // Supprimer aussi l'order lié
        await ModelOrder.deleteOne({ productId: req.params.id });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error products" });
    }
};