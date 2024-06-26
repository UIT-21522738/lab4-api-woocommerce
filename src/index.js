const cors = require('cors');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
// const helmet = require('helmet');
const app = express();

const route = require('./routes/index');

// app.use(helmet())

app.use(cors());
const port = 4000
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine(
    'hbs',
    engine({
      extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});