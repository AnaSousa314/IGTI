import mongoose from 'mongoose'



//criação do modelo
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    subject:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        require: true,
    },
    value:{
        type: Number,
        require:true,
        //valida se a nota inserida é menor que zero
        /* 
        validate(value){
            if(value < 0)
            throw new Error('Valor negativo para nota não permitido')
        }, */
        min:0
    },
    lastModified:{
        type: Date,
        default: Date.now , 
    }

});

const studentModel = mongoose.model('student',studentSchema,'student');

export {studentModel};