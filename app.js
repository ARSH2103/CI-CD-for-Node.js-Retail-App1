const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});