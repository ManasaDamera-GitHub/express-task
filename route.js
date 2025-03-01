// Task 2: Route Parameters
// Question: Create an Express route that accepts a route parameter id and responds with a message containing the id value.
//  Summary: You should define a route like /user/:id where id is a route parameter, and return a response that includes the id in the message.

let express = require("express");
let port = 3003;

let app = express();

app.get("/user/:id", (req, res) => {
    // console.log(req.params);
    let id = req.params.id;
    // console.log(id);
    res.send(`ID :${id}`)

})

app.listen(port, () => {
    console.log("server is running");
})
