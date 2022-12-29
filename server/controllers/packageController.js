const Package = require('../models/packageModel')
const mongoose = require('mongoose')

//get all packages
const getPackages = async (req, res) => {
    const packages = await Packages.find({})
    res.status(200).json(packages)
}

//get singlepackages
const getPackage = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isVailed(id)) {
        return res.status(404).json({ error: 'No such package' })
    }

    const package = await Package.findById(id)

    if (!package) {
        return res.status(404).json({ error: 'No such package' })
    }

    res.status(200).json(package)
}


module.exports = {
    getPackages,
    getPackage
}