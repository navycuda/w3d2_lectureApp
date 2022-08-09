/* Require */
const express = require('express');
const morgan = require('morgan');
const app = express();

/* Tcp:Http */
const PORT = 8080;

/* Middleware */
app.use(morgan('dev'));

/* Arguments & Properties */
/* Classes */
/* Export Functions */
/* Local Functions */
/* Endpoints */
app.get('/', (rx, tx) => {

});

/* Execution & Test Data */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* Exports */