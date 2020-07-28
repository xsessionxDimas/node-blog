const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

/* routers */
const publicRoutes = require('./routes/public');

const app = express();

/* register view engines */
app.set('view engine', 'ejs');
app.set('views', 'views');


/* register middlewares */
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


/* register routes */
app.use(publicRoutes);

/* run express */
app.listen(3000);


