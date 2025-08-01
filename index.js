const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const Review = require('./models/review');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv')

dotenv.config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('products/index', { products });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/products/new', async (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const { name, image, price, description } = req.body;
    try {
        await Product.create({ name, image, price, description });
        res.redirect('/products');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        const reviews = await Review.find({ "productId": `${id}` });
        res.render('products/product', { product, reviews });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.render('products/edit', { product });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, price, description } = req.body;
    try {
        const product = await Product.findById(id);
        product.name = name;
        product.image = image;
        product.price = price;
        product.description = description;
        await product.save();
        res.redirect('/products');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.post('/products/:id', async (req, res) => {
    const { productId, rating, review } = req.body;
    try {
        await Review.create({ productId, rating, review });
        res.redirect(`/products/${productId}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})


app.get('*', (req, res) => {
    res.redirect('/products');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('server is up at port', PORT);
        })
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    })
