const express = require('express');
const router = express.Router();
const projectModel = require('../models/project');
const request = require('request');

router.get('/', function(req, res, next) {
  res.send('Welcome to backend!');
});

router.get('/project', function(req, res, next) {
  request(`https://capsule-exams.herokuapp.com/api/capsule/projects`, function(error, response, body) {
    body = JSON.parse(body);
    console.log(body.projects, "je suis body")
    res.json({result: true, project: body.projects});
  });
});
router.post('/project/like', function(req, res, next) {
  var projectLike = new projectModel({
    stackFront: req.body.stack_front,
    stackBack: req.body.stack_back,
    name: req.body.name,
    desc: req.body.desc, 
    pic_url: req.body.pic_url,
    days_spent: req.body.days_spent
  });
  projectLike.save(function(error, project) {
    res.json({result: true, project});
  });
});
module.exports = router;
