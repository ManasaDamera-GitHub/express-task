// Combining Query and Route Parameters
// Question 5 : Create an Express route that combines both route parameters and query parameters. 
// For example, a route like /user/:id?age=:age that responds with the user's id and age from the query string.
//  Summary: In this task, you need to handle a route that contains both a route parameter and a query parameter.
//  You will extract both the id from the route and the age from the query parameters and return them in the response.

let express = require("express");
let port = 2002;

let app = express();

app.get("/user/:id", (req, res) => {
    let id = req.params.id;
    let age = req.query.age;
    // console.log(id, age);
    res.send(`id: ${id}, age: ${age}`);
})

app.listen(port, () => {
    console.log("server is running");
})