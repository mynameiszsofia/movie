const express = require("express");
const mongoose = require("mongoose");
const app = express();/* 
const movieRoutes = require("./routes/movie.routes"); */

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/movie", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

connect();

app.use(express.json());/* 
app.use("/movie", movieRoutes); */

app.post('/api', (request, response) => {
    const hei = request.body;
    console.log(request.body);
    response.json({
        status: 'success',
        yes: hei.data
    });
});


app.listen(5000, () => {
    console.log("app is running on 5000");
})