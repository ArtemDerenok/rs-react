import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../store';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const location = req.url;
  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css"/>
    <title>Document</title>
  </head>
  <body>
      <div id="root">${markup}</div>
      <script src="client.js" defer></script>
  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
