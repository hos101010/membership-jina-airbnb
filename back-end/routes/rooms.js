var express = require('express');
var router = express.Router();

const rooms = require('../model/rooms');



async function getRooms() {
    const [page_owner_info,field] = await rooms.findAll();
    return page_owner_info;
}
  
router.use('/',async function(req, res){
    let allRooms = await getRooms();
    res.json({data: allRooms});
})

module.exports = router;