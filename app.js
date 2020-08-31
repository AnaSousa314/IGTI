import express from 'express'
import mongoose from 'mongoose'
import {studentRouter} from './routes/studentRouter.js'

//conectar ao mongodb pelo mongoose
(async ()=>{
    try{
      await  mongoose.connect('mongodb+srv://AnaSousa:81014003@cluster0.bqpom.mongodb.net/grades?retryWrites=true&w=majority',{
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

app.listen(3000, ()=>console.log('API iniciada'))