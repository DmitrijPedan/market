const app = require('./server');
const port = process.env.API_PORT || 3000;
const bodyParser = require('body-parser');
const routerUsers = require('./routes/users');

app.use(bodyParser.json());
app.use('/api/users', routerUsers);


app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
});