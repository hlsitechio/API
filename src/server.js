const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Hello from the world's smallest API!" });
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
