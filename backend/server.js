require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

// Isso faz com que retorne dados do React a partir do Router
app.use(express.json());

// Primeiro router
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));