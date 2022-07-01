const express = require('express');
const Notification = require('../models/Notification')

const router = express.Router();

router.get('/notification', async(req, resp)=>{
    try {
        let data = await Notification.find();
        resp.json(data)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})

router.post('/addNotification', async(req, resp)=>{

    const {date, title, description} = req.body;
    try {
        let result = await Notification.create({date:date, title:title, description:description})
        resp.json(result)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }

})

router.put('/deleteNotification/:id', async (req, res) => {

    try {
        // Find the script to be deleted and delete it
        const scene = await Notification.findByIdAndDelete(req.params.id);
        res.json(scene);

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router