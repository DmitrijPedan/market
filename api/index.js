const app = require('./server');
const userConroller = require('./controllers/userConrtollers')
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 3000;
const models = require('./models/');

app.use(bodyParser.json());
app.get('/api/users/', userConroller.allUsers);
app.get('/api/users/:user_id', userConroller.getUser);
app.post('/api/users/', userConroller.createUser);
app.delete('/api/users/', userConroller.deleteUser);


app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
})