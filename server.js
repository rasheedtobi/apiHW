const express = require ('express');
const app = express();
const PORT = 3300
const users = [
    { 'id': 1, name: 'Dante', 'age':20, 'city':'Rio de Janeiro'},
    { 'id': 2, name: 'Kaka' , 'age':35, 'city':'Sao Paulo'},
    { 'id': 3, name: 'Jazinho', 'age':30, 'city':'Brasilia'},
    { 'id': 4, name: 'Zagalo', 'age':25, 'city':'Belo Horizonte '}
];

app.get('/homework', (request, response) =>{

    return response.json(users)
})

app.get("/homework/:id", (request, response)=>{
     
    const parsedId = parseInt(request.params.id)
    
    if (isNaN(parsedId)) {
        return response.status(400).send({msg: "Bad request. Inavlid ID"})
    }
    const findUser = users.find((user)=> user.id ===parsedId);
    if(!findUser) return response.sendStatus(404);
    return response.send(findUser)



})

app.listen(PORT, ()=> {
    console.log(`App running live on port ${PORT}`)
})