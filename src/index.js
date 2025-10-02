const express = require('express');
const path = require("path")

const app = express();

// app.get(Route, callback)
// app.get("/", callback);
// www. Abhishekpatel.com

// API,
// get - read 
// post - create 
// put - update 
// delete - delete

app.listen(3000, () => {
    console.log("a listning the port  a 3000")
})

app.get("/about", (req, res) => {
    // https://expressjs.com/en/4x/api.html
    res.send("hello Abhishek patel , how are you, ghdghhdghdg");
})


app.get("/service", (req, res) => {
    res.status(200).send("service page")
})

//  add multiple line in response use -: write :- do not work "send"

app.get("/mul", (req, res) => {
    res.write("contact a page ")
    res.write(" contactddd  page")
    res.send() // use stop searching
})

//  add array or object
app.get("/s", (req, res) => {
    res.send([{
        id:1,
        name:"abhishek",
        class:""
    },
{
        id:1,
        name:"abhishek",
        class:""
    }]);
});

app.get("/asd", (req, res) => {
    res.json([{
        id:1,
        name:"abhishek",
        class:""
    },
{
        id:1,
        name:"abhishek",
        class:"bbb"
    }]);
});
// *************************************************************************************************88
// app.get("calculator", (req, res) => {
//     console.send(__dirname,'jjjjjj')
//     res.sendFile("/index.html")
// })

// app.post("/aa", (req, res) => {
//     console.log(__dirname)
//     res.sendFile("/page.html")
// })
// *************************************************************************************************88

// use static website ******************************************************************

// builtin middleware (use static website with the help of express.static())
// middleware = express.static(root, [option])
//  two type of path :-
// 1. relative = ../../  (not use)
// 2. absolute = full path points to the same location in a file system, 
// regardless of the current working directory / use repername , rapername two types 1. __dirname 2. __filename

// use  path 
console.log(__dirname)  // show :- C:\Users\ASUS\Desktop\FriendsZone\friendsZone\express\src
console.log(__filename)  // C:\Users\ASUS\Desktop\FriendsZone\friendsZone\express\src\index.js

// but i need to public folder path :- use path.join
console.log(path.join(__dirname, "../public")) // C:\Users\ASUS\Desktop\FriendsZone\friendsZone\express\public
console.log(path.join(__filename,"../.."))  // C:\Users\ASUS\Desktop\FriendsZone\friendsZone\express\src\index.js

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath)); // run bydefault 3000 port

// ***************** Use Dynamic website **************************

// template engine in express use to Dynamic website 
// some papular template engine that works with express are Pug, Mustache, hbs and Ejs . download hbs

//  use tamplate engine to create a new folder views directory 