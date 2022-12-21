const express = require("express");
const React = require("react");
const Home = require("./components/Home.js").default;
const renderToString = require("react-dom/server").renderToString;

const app = express()
app.get("/", (req,res)=>{
    const component = renderToString(<Home />)
    res.send(component)
})


app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})