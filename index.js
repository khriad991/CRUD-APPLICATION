import express from "express";
const app = express()
import cors from 'cors';
import bodyParser from "body-parser";
import ConnectionDB from "./DB/Db.js";
import dotenv from "dotenv";
import router from "./src/routes/router.js";
import * as path from "path";

//------- dot env file implement --------
dotenv.config()

// body parser implement ----------
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// security middlewore implement ----------------
app.use(cors())




// router url difine --------
app.use('/', router);


// app.use(express.static(path.json(__dirname , "build")))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
})


const pass =process.env.DB_PASSWORD || "testcrud991"
let port = process.env.PORT || 9000;

const user =process.env.DB_USER || "testcrud991";
ConnectionDB(user,pass)
app.listen(port,()=>{console.log(`Application Runing Port @${port}`)})

