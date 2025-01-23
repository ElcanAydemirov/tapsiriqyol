const express = require("express")
const { getAll, getById, deleteById, post, editById } = require("../controllers/productcontrollers")
const router = express()

router.get("/",getAll)
router.get("/:id",getById)
router.delete("/:id",deleteById)
router.put("/:id",editById)
router.post("/",post)

module.exports = router

