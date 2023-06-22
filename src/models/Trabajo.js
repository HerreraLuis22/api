const mongoose = require('mongoose');

const trabajoschema = mongoose.Schema({
    Id_Trabajo:{
        type:String,
        require:true
    },
    Fecha:{
        type:Date,
        require:true
    },
    Descripcion:{
        type:String,
        require:true
    },
    Costo:{
        type:Number,
        require:true
    },
    Total:{
        type:Number,
        require:true
    },
    Contrato:[
        {
            Id_Contrato:{type:String,require:true},
            Parte_Empresa:{type:Number,require:true}
        }
    ]
});
module.exports = mongoose.model('Trabajo',trabajoschema);