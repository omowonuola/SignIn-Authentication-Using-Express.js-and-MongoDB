const express = require("express");
const { 
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom
} = require('../controllers/rooms');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
    .route('/')
    .get(getRooms)
    .post(createRoom);

router
    .route('/:id')
    .get(protect, getRoom)
    .put(updateRoom)
    .delete(deleteRoom);

module.exports = router; 