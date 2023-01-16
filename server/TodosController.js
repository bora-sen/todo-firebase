module.exports = class TodosController{

    constructor(todo_list){
        this.TodoList = todo_list;
    }



    AddTodo(todoObj){
        this.TodoList.push(todoObj);
    }
    
    CreateTodo(id,author,title){
        let new_obj = {
            id,
            author,
            title,
            isDone:false
        }
        return new_obj
    }
    
    setIsDone(s_id,val){
        let sel_todo = this.TodoList.find(todo => { return todo.id === s_id});
        sel_todo.isDone = val;
        console.log(sel_todo);
    }
}
