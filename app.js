const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
urlEncodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.set("view engine", "ejs");

let values = [];

app.get("/", (req, res) => {
    res.render("index", { data: values })
})

app.get("/delete", (req, res) => {
    values.pop();
    res.render("index", { data: values })

})

app.post("/add", urlEncodedParser, (req, res) => {
    values.push(req.body)
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`)
});