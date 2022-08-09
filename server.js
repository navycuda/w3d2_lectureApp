/* Require */
const express = require('express');
const morgan = require('morgan');
const app = express();


/* Tcp:Http */
const PORT = 8080;

/* Middleware */
app.set('view engine', 'ejs');
app.use(morgan('dev'));

/* Arguments & Properties */
const starShips = {
  '1701': { question: "Intercepted V'ger", answer: "USS ENTERPRISE" },
  '2000': { question: "The great experiment", answer: "USS EXCELSIOR" },
  '1864': { question: "Commandeered by Khan", answer: "USS RELIANT" }
};
/* Classes */
/* Export Functions */
/* Local Functions */
/* Endpoints */

/* Browse */
app.get('browse', (request, response) => {
  response.render('browse', { starShips });
});
/* Read */
/* Edit */
/* Add */
/* Delete */

/* Execution & Test Data */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* Exports */



