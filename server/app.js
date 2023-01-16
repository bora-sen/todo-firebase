const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');


const Todos = [];


function AddTodo(todoObj){
    Todos.push(todoObj);
}

function CreateTodo(id,author,title){
    let new_obj = {
        id,
        author,
        title,
        isDone:false
    }
    return new_obj
}

function setIsDone(s_id,val){
    let sel_todo = Todos.find(todo => { return todo.id === s_id});
    sel_todo.isDone = val;
    console.log(sel_todo);
}





AddTodo(CreateTodo(1,"Bora","Do This"));
AddTodo(CreateTodo(2,"Bora","Do That"));
AddTodo(CreateTodo(3,"James","Do Those"));
AddTodo(CreateTodo(4,"James","Do Some"));
AddTodo(CreateTodo(5,"James","Do Things"));


console.log(Todos)

app.use(express.json());

// GET ALL TODOS BY AUTHOR NAME
app.get('/getTodos/:name',cors(),(req,res) => {
    const req_name = req.params.name;
    res.send(Todos.filter(todo => {return todo.author === req_name}));
    res.send("Sending Todos for name "+req_name)

} )

// SET TODO IS_DONE PROPERTY
app.post('/setTodo/',cors(),(req,res) => {
    let req_id = req.body.id;
    let req_val = req.body.value;
    setIsDone(req_id,req_val);
    console.log(Todos)
    res.send("Recieved!")
})

// CREATE TODO OBJECT
app.post('/createTodo/',cors(),(req,res) => {
    let req_id = req.body.id;
    let req_author = req.body.author;
    let req_title = req.body.title;
    let new_todo = CreateTodo(req_id,req_author,req_title);
    AddTodo(new_todo);
    console.log("New Todo Created!");
    console.log(Todos);
    res.send("Todo Created!")

})

app.listen(5000,() => {
    console.log("Listening Port [5000]");
})