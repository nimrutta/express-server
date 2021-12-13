const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000
const mongoose = require("mongoose");

app.get( '/' ,(req, res) => {
res.type( 'text/plain' )
res.send( 'Server Expresso ☕' )
})
app.get( '/about', ( req, res ) => {
res.type( 'text/plain' )
res.send( 'Server Expresso ☕ About')
})
app.use( ( req, res ) => {
res.type( 'text/plain' )
res.status( 404 )
res.send('404 Not found ☕_☕')
})

mongoose.connect("mongodb+srv://Nimrutta:4DpFDXLeFGaUkTlV@clusterd.64lgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log("Database connection successful"))
.catch(() => console.log("Database connection error"));

app.listen( port ,
() => console.log(`Expresso ☕ is on Port ${ port } Ctrl + C to Stop `) )