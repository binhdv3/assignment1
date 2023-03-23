const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const path = require('path');
const port = 3000

const expressHbs = require('express-handlebars');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname));

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'login',
    //layoutsDir: "views/layouts/",
}));

app.set('view engine', '.hbs');

app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', {
        layout: 'login'
    })
});

app.get('/admin', (req, res) => {
    res.render('home', {
        layout: 'admin'
    })
});

app.get('/product', (req, res) => {
    res.render('home', {
        layout: 'product'
    })
});

app.get('/productManager', (req, res) => {
    res.render('home', {
        layout: 'productManager'
    })
});

app.get('/user', (req, res) => {
    res.render('home', {
        layout: 'user'
    })
});

app.get('/userManager', (req, res) => {
    res.render('home', {
        layout: 'userManager'
    })
});

app.get('/signup', (req, res) => {
    res.render('home', {
        layout: 'signup'
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});