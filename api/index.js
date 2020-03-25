const app = require('./server');
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 3000;
const models = require('./models/');


const allUsers = async (req,res) => {
    try{
        let users = await models.User.scope('hidePersonalData').findAll();
        res.json({
            data: users
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};


const getUser = async (req,res) => {
    try {
        const user = await models.User.scope('hidePersonalData').findByPk(req.params.user_id);
        res.json({
            data: user
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

const createUser = async (req,res) => {
    try {
        const user = await models.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName || null,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            role: req.body.role || 'user'
        });
        res.json({
            data: user
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

app.use(bodyParser.json());
app.get('/api/users/', allUsers);
app.get('/api/users/:user_id', getUser);
app.post('/api/users/', createUser);


app.listen(port, () => {  
    console.log(`App was loaded on port: ${port}`);
})