const express=require('express');
const stream_controllers=require('../controllers/stream_controllers');
const router=express.Router();

router.post('/create',stream_controllers.create);
router.get('/fetchstreams',stream_controllers.fetchstreams);
router.get('/fetch/:id',stream_controllers.fetchstream);
router.post('/delete/:id',stream_controllers.delete);
router.post('/edit/:id',stream_controllers.edit);

module.exports=router;

