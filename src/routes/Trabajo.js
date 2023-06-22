const express = require('express');
const trabajoschema = require('../models/Trabajo');
const { json } = require('express/lib/response');
const router = express.Router();

//create trabajo
router.post('/Trabajos',(req, res)=>{
  const trabajo =   trabajoschema(req.body);
    trabajo
    .save()
    .then((dato) => res.json(dato))
    .catch((error) => res.json({message:error}));
});
//Get all trabajos
router.get('/Trabajos',(req, res)=>{
      trabajoschema
      .find()
      .then((dato) => res.json(dato))
      .catch((error) => res.json({message:error}));
  });
  //Get a trabajo by id
  router.get('/Trabajos/:id',(req, res)=>{
    const{id} = req.params;
    trabajoschema
    .findById(id)
    .then((dato) => res.json(dato))
    .catch((error) => res.json({message:error}));
});
//update a trabajo
router.put('/Trabajos/:id',(req, res)=>{
    const{id} = req.params;
    const{Costo,Total,Contrato} = req.body;
    trabajoschema
    .updateOne({ _id: id},{$set:{Costo,Total}})
    .then((dato) => res.json(dato))
    .catch((error) => res.json({message:error}));
});
//delete
router.delete('/Trabajos/:id',(req, res)=>{
    const{id} = req.params;
    trabajoschema
    .deleteOne({ _id: id})
    .then((dato) => res.json(dato))
    .catch((error) => res.json({message:error}));
});
module.exports = router;
