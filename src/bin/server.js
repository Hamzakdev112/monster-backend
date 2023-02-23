const express = require("express");
const app = express();
const port = 4500;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const routePayment = require("../Routes/payment");
const bodyParser = require("body-parser");
require('../bootstrap/index')
const postRoute = require('../Routes/post')
const userRoute = require('../Routes/user')
const paymentRoute = require('../Routes/payment')
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const CookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use(
  session({
    secret: "my-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

require("../bootstrap/index");

app.use(route);
app.use(routePayment);

app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(CookieParser())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload ({
  useTempFiles: true
  
}))



//Routes

app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/payment', paymentRoute)



app.listen(port, () => {
  console.log(`server listening on ${port} `);
});
