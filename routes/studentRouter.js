import express from 'express'
import {studentModel} from '../models/studentModel.js'

const app = express();


//CREATE
app.post('/student', async (req,res)=>{
    try {
        const student = new studentModel(req.body);

        await student.save();

        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    } 
});

//RETRIVE (consulta)
app.get('/student', async(req,res)=>{
    try {
        
        const student = await studentModel.find({});
        
        res.send(student);
    } catch (error) {
        res.status(500).send(error)
        
    }
})

//UPDATE
app.patch('/student/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        
        const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true})//esse find é próprio do mongoose e serve para achar pelo id e já atualizar os dados. esse new é um parametro que informa que deve trazer os dados atualizados, e não os que ainda não foram atualizados

        res.send(student)

    } catch (error) {
        res.status(500).send(error)
        
    }
});

//DELETE
app.delete('/student/:id', async (req,res)=>{
    try {
        const student = await studentModel.ffindByIdAndDelete({_id:req.params.id})//essa é outra forma de passar os parametros, já colocar o req.params.id
        studentModel.f

        if (!student) {
            res.status(404).send('Documento não encontrado na coleção')
        }else{
            res.send(200).send();
        }

    } catch (error) {
        res.status(500).send(error);     
    }
});

//Criação de um novo branch, alteração a partir daqui

app.put('/student/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        
        const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true})

        res.send(student)

    } catch (error) {
        res.status(500).send(error)
        
    }
});

export {app as studentRouter};
