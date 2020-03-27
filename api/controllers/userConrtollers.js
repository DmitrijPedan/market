const models = require('../models');

exports.allUsers = async (req,res) => {
    try {
        let users = await models.User.scope('hidePersonalData').findAll();
        if (users) {
            res.json({data: users, status: "success"});
        } else {
            res.json({data: null, status: "fail"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.getUser = async (req,res) => {
    try {
        const user = await models.User.scope('hidePersonalData').findByPk(req.params.user_id);
        if (user) {
            res.json({data: user, status: "success"});
        } else {
            res.json({data: null, status: "fail"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.createUser = async (req,res) => {
    try {
        const user = await models.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName || null,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            role: req.body.role || 'user'
        });
        res.json({data: user, status: "success"});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.deleteUser = async (req,res) => {
    try {
        const user = await models.User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(user) {
            await user.destroy();
            res.json({data: user, status: "success"});
        } else {
            res.json({data: null, status: "fail"});
        } 
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.setUserStatus = async (req,res) => {  
    try {
        const user = await models.User.findOne({
            where: {email: req.body.email},
        });
        if(user) {
            await user.update(
                {activeStatus: req.body.status},
            );
            res.json({data: user, status: "success"});
        } else {
            res.json({data: null, status: "fail"});
        } 
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.allUsersStatus = async (req,res) => {
    try {
        let users = await models.User.scope('hidePersonalData').findAll({
            where: {activeStatus: req.body.status},
        });
        if (users.length > 0) {
            res.json({data: users, status: "success"});
        } else {
            res.json({data: null, status: "fail"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};