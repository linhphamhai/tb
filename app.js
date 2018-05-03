const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000 !');
});


var SliderApi = require("./api/SliderApi");
app.use("/", SliderApi);

