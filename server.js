const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./lib/helpers');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3001;

/* Your cookie-handling settings should be inserted in the cookie object below */
const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 24 * 60 * 60 * 1000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening, Visit http://localhost:${PORT}`));
});