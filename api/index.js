const app = require('./server');
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 3000;
const routerUsers = require('./routes/users');

app.use(bodyParser.json());
app.use('/api/users', routerUsers);


app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
})