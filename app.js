const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (IMPORTANT)
app.use(express.static(path.join(__dirname, 'Public')));

// Products API
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 }
    ]);
});

// Fallback (IMPORTANT FIX)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});