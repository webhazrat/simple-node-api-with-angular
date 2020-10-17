const express = require('express');
const app=express();
const port = 4500;

const cors = require('cors');

const corsOptions={
	origin:'http://localhost:4200',
	optionsSuccessStatus:200
}
app.use(cors(corsOptions));

const data = [
    {id:1, name:"Golam Mostafa Sujon", phone:"01616777668", gender:"Male"},
	{id:2, name:"Md. Asadullah", phone:"01703696593", gender:"Male"},
	{id:3, name:"Md. Hasnain Arafat", phone:"01740973297", gender:"Male"},
	{id:4, name:"Md. Mizanur Rahman", phone:"01796128398", gender:"Male"},
	{id:5, name:"Md. Salekuzzaman", phone:"01650102169", gender:"Male"},
	{id:6, name:"Md. Sohrab", phone:"01700000000", gender:"Male"},
	{id:7, name:"Md. Rubel Hossain", phone:"01724807608", gender:"Male"},
	{id:8, name:"Md. Roni", phone:"01640178559", gender:"Male"},
	{id:9, name:"Minhaz Ahammed", phone:"01639549235", gender:"Male"},
	{id:10, name:"Md. Mosarof Hosen", phone:"01700000000", gender:"Male"},
	{id:11, name:"Md. Anuwar Parvez", phone:"01648273068", gender:"Male"},
	{id:12, name:"Md. Saif", phone:"01616777668", gender:"Male"},
	{id:13, name:"Md. Ezazul Haque", phone:"01700000000", gender:"Male"},
	{id:14, name:"Md. Rakibul Islam", phone:"01709437920", gender:"Male"},
	{id:15, name:"Md. Rasel Hossen", phone:"01756279482", gender:"Male"},
	{id:16, name:"Md. Saiful Islam", phone:"01700000000", gender:"Male"},
	{id:17, name:"Md. Aftab Uddin", phone:"01626974759", gender:"Male"},
	{id:18, name:"Most. Sakera Khatun", phone:"01700000000", gender:"Female"},
	{id:19, name:"Most. Rofia Khatun", phone:"01772852351", gender:"Female"},
	{id:20, name:"Mst. Sabrin Akter Liza", phone:"01795888428", gender:"Female"},
	{id:21, name:"Most. Masfura Khatun", phone:"01724295511", gender:"Female"},
	{id:22, name:"Most. Afifa Tarannum", phone:"01796068440", gender:"Female"},
	{id:23, name:"Tasfia Tabassum", phone:"01700000000", gender:"Female"},
	{id:24, name:"Most. Sabera Khatun", phone:"01761272451", gender:"Female"},
	{id:25, name:"Md. Wasim Akram", phone:"01620400568", gender:"Male"}
];

app.get('/student', function(req, res){
	res.json(data);
});

app.get('/student/:id', function(req, res){
	const student = data.find(c => c.id === parseInt(req.params.id));
    if(!student) res.status(404).send("Student is not found");
	res.json(student);
});

app.listen(port, function(){console.log(`App running on port ${port}`)});