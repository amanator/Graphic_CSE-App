const express = require('express');
const Faculty = require('../models/Faculty')

const router = express.Router();
router.get('/getfaculty', async(req, resp)=>{
    try {
        let data = await Faculty.find();
        // console.log(data)
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})

router.post('/addFaculty', async(req, resp)=>{

    const {name, position, imgUrl} = req.body;
    try {
        let result = await Faculty.create({name:name, position:position, urlToImage:imgUrl})
        resp.json(result)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }

})

router.put('/deleteFaculty/:id', async (req, res) => {

    try {
        // Find the script to be deleted and delete it
        const result = await Faculty.findByIdAndDelete(req.params.id);
        res.json(result);

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router