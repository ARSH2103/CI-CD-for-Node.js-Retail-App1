const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample products
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];

// API route
app.get('/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});