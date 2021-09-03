const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const hbs = require("hbs");

// Public static path

const static_path   = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partialpath   = path.join(__dirname, "../template/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
app.use(express.static(static_path));
hbs.registerPartials(partialpath);
//Routing

app.get("", (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("*", (req,res) => {
    res.render("404error", {
        errormessage: "Ufff",
    });
})

app.listen( port, () => {
    console.log(`Listening Som Technical channel ${port}`);
})