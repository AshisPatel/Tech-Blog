const express = require('express');
const exhbs = require('express-handlebars');
// adds in the helpers.js file to handlebars
const helpers = require('./utils/helpers')
const hbs = exhbs.create({ helpers });
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
    cookie: {
        // maxAge sets the timeout after a duration of activity (1 hour)
        maxAge: 1000*60*60
    },
    resave: false,
    // rolling causes the session duration to be continued on each request...
    rolling: true,
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