const {Router} = require('express')

const router = new Router()

router.get("/", (req, res, next)=>{
    res.send("yo")
})

module.exports = router
