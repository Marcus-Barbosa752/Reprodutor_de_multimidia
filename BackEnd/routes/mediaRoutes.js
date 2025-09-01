const express = require("express")
const router = express.Router()
const { getAllMedia, addMedia, deleteMedia } = require("../controllers/mediaController")

router.get("/", getAllMedia)
router.post("/", addMedia)
router.delete("/:id", deleteMedia)

module.exports = router