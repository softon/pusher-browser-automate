require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hostname = '0.0.0.0';
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1584911",
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap2",
    useTLS: true
  });

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    // pusher.trigger("my-channel", "my-event", {
    //     message: "About Page Opened"
    // });
    res.render('pages/about');
});

// Client page
app.get('/client', function(req, res) {
    res.render('pages/client');
});

// broadcast url
app.post('/start-clients', function(req, res) {
    let linkUrl = req.body.appurl;
    pusher.trigger("browser-automate", "redirect-to-url", {
        message: {
            action: 'start',
            appurl: linkUrl
        }
    });
    res.send({
        status: 'success'
    })
});

app.listen(process.env.PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





