/* Imports */

import express from 'express'
import mongoose from 'mongoose'
import {studentRouter} from './routes/studentRouter.js'

//conectar ao mongodb pelo mongoose
//require('dotenv').config();
//Digite no terminal node -r dotenv/config --experimental-modules app.js   para startar 

 
(async ()=>{
    try{
      await  mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@cluster0.bqpom.mongodb.net/grades?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conectado no MongoDB com sucesso!')
    } catch(error){
        console.log("Erro ao conectar ao MongoDB" + error)
    }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, ()=>console.log('API iniciada'))