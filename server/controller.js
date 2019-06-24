// build controller with the 4 basic operations
// controller is object
// always wanna send a status and then send message
var todos = ['swim', 'eat'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },

  post: (req, res) => {
    // post info in req.body. state is req.body
    var todo = req.body.todo;
    todos.push(todo);
    res.status(201).send(todos);
    
  },

  update: (req, res) => {
    // res.status(200).send('UPDATE RESPONSE');
  },

  delete: (req, res) => {
    // if you wanna grab any of your paramaters, must use req.query
    todos.splice(req.query.index, 1);
    res.status(200).send(todos);
  }
}

module.exports = controller;