import { Router } from "express";
let router = Router()
import users from './users.route.js'

router.get('/', function(req, res){
    res.send('Changas server ready')
})
router.use('/users', users)

export default router