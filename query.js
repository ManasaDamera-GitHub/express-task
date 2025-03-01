// Task 1: Query Parameters
// Question: Create an Express route that accepts a query parameter name and responds with a greeting message including the name.
// Summary: You need to create a route / greet that extracts the name query parameter from the URL and responds with a personalized greeting

let express = require("express");
let port = 3000;

let app = express();

app.get("/greet", (req, res) => {
    // console.log(req.query);
    let name = req.query.name;
    res.send(`hello , ${name}`)

})

app.listen(port, () => {
    console.log("server is running");

})