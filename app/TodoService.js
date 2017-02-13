var TodoService = (function(service) {

    var _todos = [];

    service.getTodos = function() {
        return _todos;
    }

    service.addTodo = function(description) {
        _todos.push(new Todo(description));
    }


    return service;

})(TodoService || {});