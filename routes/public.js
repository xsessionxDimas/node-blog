/* controller */
const controller = require('../controllers/public-controller');

const express = require('express');
const router  = express.Router();

/* register router */
router.get('/', controller.getIndex);
router.get('/services', controller.getServices);
router.get('/team', controller.getTeam);
router.get('/blog', controller.getBlog);
router.get('/detail/:blogId', controller.getBlogDetail);
router.get('/contact', controller.getContact);

module.exports = router;