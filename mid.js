// Task 4: Middleware
// Question: Write a middleware function that logs the HTTP method and URL of every incoming request. 
// Then, apply this middleware to your Express app. Summary: Your task is to implement a custom middleware 
// that logs the HTTP method (GET, POST, etc.) and the URL for each request before passing control to the next middleware or route handler.

let express = require("express");
let port = 2001;

let app = express();

app.use(mid);

function mid(req, res, next) {
    let methods = req.method;
    // console.log(methods);
    next();
}

app.get("/", (req, res) => {
    res.send("hello")
})

app.post("/", (req, res) => {
    res.send("this is post method");

})

app.listen(port, () => {
    console.log("Server is running");

})