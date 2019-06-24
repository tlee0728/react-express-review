const router = require('express').Router();
const controller = require('./controller');

router 
  .route('/api')    // need to reference where to route to
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);
      
module.exports = router;


// how to connect route to express server?
// 