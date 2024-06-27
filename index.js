var express = require('express');
const quranRoutes = require('./router');
const bodyParser = require('body-parser');
var app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get('/' ,function(req,res)  {
    res.sendFile(__dirname + "/public/index.html")
});

// Routes
app.use('/quran', quranRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
