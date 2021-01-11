const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});

router.get('/search', require('../controllers/search_controller'));

module.exports = router;
