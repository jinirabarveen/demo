let express = require('express'),
    app = express();

app.use(express.static('public/html'));
app.use(express.static('public/js'));

var number=require('./routes/number');

app.use('/number',number);

app.listen(5000,function () {
  console.log("listen on port 8080");
});