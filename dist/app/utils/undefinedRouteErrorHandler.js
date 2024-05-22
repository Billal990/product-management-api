"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undfinedRouteHandler = void 0;
const app_1 = require("../../app");
const undfinedRouteHandler = () => {
    app_1.app.all('*', (req, res) => {
        //Requested route and method from frontend
        const route = req.url;
        const method = req.method;
        res.json({
            message: 'Requested route not found!',
            route,
            method,
            code: 404,
            status: false,
        });
    });
};
exports.undfinedRouteHandler = undfinedRouteHandler;
