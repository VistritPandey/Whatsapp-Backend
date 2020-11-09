import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 9000;

const connection_url ='mongodb+srv://admin:<password>@vistrit.ipx1s.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})











app.get("/", (req ,res ) => res.status(200).send("test"));

app.listen(port, ()=>console.log(`Listening on Localhost:${port}`));