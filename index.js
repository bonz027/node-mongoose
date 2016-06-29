var express = require('express');
var router  = express.Router();
var Vehicle = require('./models/vehicle')
var app     = express();

/* GET home page. */
router.get('/', function(req, res){
  res.render('index', {title: 'Express'});
});

router.get('/newVehicle', function(req, res){
  // Create a new vehicle object
  var newVehicle = new Vehicle({
    name: "My Fun Car.",
    color: "Blue"
});
res.send(newVehicle);
  // Store it in the database
  // Redirect back to hompage
});

module.express = router;

app.listen(process.env.PORT || 3000);
