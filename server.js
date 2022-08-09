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
app.get('/', (rx, tx) => {
  tx.send('Hello World!');
});

/* Browse */
app.get('/browse', (rx, tx) => {
  const dynamicContent = 'violin';
  const templateVars = { starShips };
  tx.render('browse', templateVars);
});

/* Read */
app.get('/read/:key', (rx, tx) => {
  const key = rx.params.key;

  if (starShips[key]) {

    const templateVars = {
      key,
      value: starShips[key].answer
    };
    tx.render('read', templateVars);
    return;
  }
  tx.send('Error');
});

/* Edit */
/* Add */
/* Delete */

/* Execution & Test Data */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* Exports */



