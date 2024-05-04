const express = require('express');
const TestingModule = require("../TaskControl/Module.js");
const router = express.Router();

router.post("/api/post", TestingModule.CreateMethod);
router.get("/api/get", TestingModule.GettingMethod);

module.exports = router;
