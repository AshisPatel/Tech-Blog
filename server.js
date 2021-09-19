const express = require('express');
const exhbs = require('express-handlebars');
const hbs = exhbs.create({});
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');


require('dotenv').config();

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 9001; 

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now live on ${PORT}! d(^~^)b`));
});