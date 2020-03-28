const router = require('express').Router();
const models = require('../models');

router.get('/', async (req, res) => {
    try {
        let data = await models.Task.findAll({
            include: {
                model: models.User
            }
        });
        res.json({data: data});
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Server was broken"
        });
    }
});

module.exports = router;