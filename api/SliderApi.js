var express = require('express');
var router = express.Router();
var SliderDao = require("../dao/SliderDao");

router.get("/api/get-slider", function(req, res){
    SliderDao.getAllSlider(function(result){
        res.json(result);
    })
});

module.exports = router;