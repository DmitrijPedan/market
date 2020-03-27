const router = require('express').Router();
const userConroller = require('../controllers/userConrtollers');

router.post('/create/', userConroller.createUser);
router.delete('/delete/', userConroller.deleteUser);
router.get('/all', userConroller.allUsers);
router.get('/id/:user_id', userConroller.getUser);
router.patch('/setstatus', userConroller.setUserStatus);
router.get('/status/:status', userConroller.allUsersStatus);

module.exports = router;