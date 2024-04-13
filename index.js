const express = require('express');
const routerApi = require('./router');

const app = express();

const PORT = process.env.PORT || 3000;

routerApi(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
});