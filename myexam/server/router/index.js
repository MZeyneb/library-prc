const express = require('express')

const {
    getAllGoods,
    getGoodById,
    deleteGood,
    postGood
} = require('../controllers/index')

const router = express.Router()

router.get("/", getAllGoods)
router.get("/:id", getGoodById)
router.delete("/:id", deleteGood)
router.post("/", postGood)


module.exports = router