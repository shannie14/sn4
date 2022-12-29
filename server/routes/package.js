const express = require('express')
const {
    getPackage,
    getPackages,
} = require('../controllers/packageController')


const router = express.Router()

//GET all packages
router.get('/', getPackages)

//GET a single package
router.get('/:id', getPackage)


module.exports = router