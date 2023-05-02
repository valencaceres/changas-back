import express from 'express'
let router = express.Router()
import usersController from '../controllers/users.controller.js'
const {create, get} = usersController


router.post('/', create)
router.get('/', get)
export default router