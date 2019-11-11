const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/controllers/controller.js')
const app = express();
const db = require('../database/index.js')
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/resume/', controller.getResume);
// app.get('/api/account/', controller.getAllAccount);
// app.post('/workouts', controller.postWorkout);
// app.put('/workouts');
// app.delete('/workouts');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
