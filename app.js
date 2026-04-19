const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Root route fallback (important fix)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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