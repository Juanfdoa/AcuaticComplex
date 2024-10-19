"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _poolsRoutes = _interopRequireDefault(require("./routes/pools.Routes.js"));
var _organizationsRoutes = _interopRequireDefault(require("./routes/organizations.Routes.js"));
var app = (0, _express["default"])();

//Routes

// Middlewares
app.use(_express["default"].json());

//Routes
app.use('/api/pools', _poolsRoutes["default"]);
app.use('/api/organizations', _organizationsRoutes["default"]);

// Configuración del puerto
app.set('PORT', process.env.PORT || 3000);

// Iniciar el servidor
//app.listen(app.get('PORT'), () => {
//  console.log(`Servidor escuchando en el puerto`, app.get('PORT'));
//});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});