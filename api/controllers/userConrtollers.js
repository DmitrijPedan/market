const models = require('../models');

exports.allUsers = async (req,res) => {
    try {
        let users = await models.User.scope('hidePersonalData').findAll();
        if (users) {
            res.json({status: "success", results:users.length, data: users});
        } else {
            res.json({status: "fail", data: null});
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
            res.json({status: "success", data: user});
        } else {
            res.json({status: "fail", data: null});
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
        res.json({status: "success", data: user});
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
                id: req.body.id,
            }
        });
        if(user) {
            await user.destroy();
            res.json({status: "success", data: user});
        } else {
            res.json({status: "fail", data: "user not found"});
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
            where: {id: req.body.id},
        });
        if(user) {
            await user.update(
                {activeStatus: req.body.activeStatus},
            );
            res.json({status: "success", data: user});
        } else {
            res.json({status: "fail", data: null});
        } 
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};

exports.allUsersStatus = async (req,res) => {
    console.log(req.params);
    try {
        let users = await models.User.scope('hidePersonalData').findAll({
            where: {activeStatus: req.params.status},
        });
        if (users.length > 0) {
            res.json({status: "success", results:users.length, data: users});
        } else {
            res.json({status: "fail", data: "users not found"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
};