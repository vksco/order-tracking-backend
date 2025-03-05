const express = require('express');
const { getIndex } = require('../controllers/indexController');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const router = express.Router();

router.get('/', getIndex);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
