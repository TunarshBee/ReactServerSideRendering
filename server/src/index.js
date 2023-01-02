const express = require("express");
const React = require("react");
const Home = require("./client/components/Home.js").default;
const renderToString = require("react-dom/server").renderToString;


const app = express()

app.use(express.static('public'))
app.get("/", (req,res)=>{
    const component = renderToString(<Home />)

    const html=`
    <html>
        <head></head>
        <body>
            <div id='app'>
                <h1>${component}</h1>
                <button >Click me jhor</button>
                <script src="bundle.js"></script>
            </div>
        </body>
    </html>
    
    `
    res.send(html)
})


app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})