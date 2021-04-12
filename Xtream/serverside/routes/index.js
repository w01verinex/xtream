const express=require('express');

const router=express.Router();
const home_controllers=require('../controllers/home_controllers');

router.get('/',home_controllers.home);
router.use('/stream',require('./stream_routes'));


module.exports=router;