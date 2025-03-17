const express = require('express');
const { getIndex } = require('../controllers/indexController');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoute');
const productRoutes = require('./productRoute');
const router = express.Router();

router.get('/', getIndex);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);

module.exports = router;
