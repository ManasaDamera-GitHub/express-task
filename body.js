
// Task 3: Headers and Body Parameters
// Question: Implement a POST route that accepts JSON data with a name field in the request body, and a custom Authorization header.
//  Respond with the received name and confirm the authorization. Summary: You need to create a POST route /submit that parses the request 
// body and header, and then sends back a confirmation message including both the name from the body and the Authorization header value.


let express = require("express");
let port = 2000;

let app = express();
app.use(express.json());

app.post("/submit", (req, res) => {
    let name = req.body.name;
    let authHead = req.get("authorization");

    res.send(`name: ${name}, Authorization:${authHead}`)
})

app.listen(port, () => {
    console.log("Server is running");

})


