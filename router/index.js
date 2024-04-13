const routerProducts = require('./products.router');
const routerUsers = require('./users.router');
const routerOrders = require('./orders.router');

function routerApi (app) {
    app.use('/api/products', routerProducts);
    app.use('/api/users', routerUsers);
    app.use('/api/orders', routerOrders);
}

module.exports = routerApi;
