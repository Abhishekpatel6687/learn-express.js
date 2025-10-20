const express = require('express');
const path = require("path")
const hbs = require("hbs") // 1st work hbs require use partials

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

//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               


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

// const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath)); // run bydefault 3000 port

// ***************** Use Dynamic website **************************

// template engine in express use to Dynamic website 
// some papular template engine that works with express are Pug, Mustache, hbs and Ejs . download hbs

//  use tamplate engine to create a new folder views directory 

app.set("view engine", "hbs");

//view templete engine route

app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
    res.render("index",{
        age:246, //diynamic data send but use index.hbs {{age}} same formet
    })
})

// ye data nhi show ho raha hai ye top to bottom rule follow kr raha hai iske jo pahile data mil ja raha h 
// vahi show kr deta hai fr connection close kr deta hai

app.get("/", (req, res) => { 
    res.send("hello from express side") // not show
})

// change views directory
// how to change views folder name , how to another folder name to run code
// const templatePath = path.join(__dirname, "../templates");

// app.set("view engine", "hbs");
// app.set("views", templatePath);

// app.get("/about", (req, res) => {
//     res.render("about")
// })
// app.get("/", (req, res) => {
//     res.render("index",{
//         age:24, //diynamic data send but use index.hbs {{age}} same formet
//     })
// })


//--8-------use Partials in express ja ------

// Node  + Express.js, hbs and partials

// Now that, we have a server up and running lets display more information on our pages
//  and use partials and the hbs libarary to render views.

// thats helps repated file, and reusable file

// 1st work hbs require use partials

//server start krne ke liye = nodemon src/index.js -e js,hbs  ==// all file run 

//  ============
// css use krne ke liye public folder me css file bnao
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath)); // run bydefault 3000 port
//  =======

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.get("/about", (req, res) => {
  res.render("about");
});

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

