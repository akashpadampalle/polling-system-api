const express = require('express');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

const db = require('./configs/db_connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


app.use('/', require('./routes/index'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`server is up and running at port ${port}`);

})