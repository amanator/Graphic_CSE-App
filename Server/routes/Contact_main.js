const express = require('express');
const Contact = require('../models/Contact')

const router = express.Router();

router.get('/getContact', async(req, resp)=>{
    try {
        let data = await Contact.find();
        // console.log(data)
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})

router.post('/addContact', async(req, resp)=>{

    const {name, email, issue} = req.body;
    try {
        let result = await Contact.create({name:name, email:email, issue:issue})
        resp.json(result)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }

})

router.put('/deleteContact/:id', async (req, res) => {

    try {
        // Find the script to be deleted and delete it
        const result = await Contact.findByIdAndDelete(req.params.id);
        res.json(result);

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router