const express = require('express');
const Placement = require('../models/Placement')
const Recruiter = require('../models/Recruiter')

const router = express.Router();

// Get
router.get('/getPlacement', async(req, resp)=>{
    try {
        let data = await Placement.find();
        
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})
router.get('/getRecruiter', async(req, resp)=>{
    try {
        let data = await Recruiter.find();
        
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }

})

// ADD

router.post('/addPlacement', async(req, resp)=>{

    const {name, imgUrl} = req.body;
    try {
        let result = await Placement.create({name:name, urlToImage:imgUrl})
        resp.json(result)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
    
})

router.post('/addRecruiter', async(req, resp)=>{

    const {imgUrl} = req.body;
    try {
        let result = await Recruiter.create({ urlToImage:imgUrl})
        resp.json(result)
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }

})

// Delete

router.put('/deletePlacement/:id', async (req, res) => {

    try {
        // Find the script to be deleted and delete it
        const result = await Placement.findByIdAndDelete(req.params.id);
        res.json(result);

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
})
router.put('/deleteRecruiter/:id', async (req, res) => {

    try {
        // Find the script to be deleted and delete it
        const result = await Recruiter.findByIdAndDelete(req.params.id);
        res.json(result);

    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
})


module.exports = router