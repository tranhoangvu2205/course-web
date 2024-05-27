const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3001;
const db = require('./config/db/index')

// Connect to db
db.connect();
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
console.log("PATH: " + path.join(__dirname))
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.engine("hbs",handlebars.engine({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// route init
route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});