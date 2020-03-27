const router = require('express').Router();
const userConroller = require('../controllers/userConrtollers');

router.get('/all', userConroller.allUsers);
router.get('/id/:user_id', userConroller.getUser);
router.post('/create/', userConroller.createUser);
router.delete('/delete/', userConroller.deleteUser);
router.patch('/setstatus', userConroller.setUserStatus);
router.get('/getstatus', userConroller.allUsersStatus);

module.exports = router;