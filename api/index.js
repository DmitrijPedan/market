const app = require('./server');
const userConroller = require('./controllers/userConrtollers')
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 3000;


app.use(bodyParser.json());
app.get('/api/users/all', userConroller.allUsers);
app.get('/api/users/id/:user_id', userConroller.getUser);
app.post('/api/users/create/', userConroller.createUser);
app.delete('/api/users/delete/', userConroller.deleteUser);
app.patch('/api/users/setstatus', userConroller.setUserStatus);
app.get('/api/users/getstatus', userConroller.allUsersStatus);


app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
})