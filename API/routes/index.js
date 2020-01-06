import express from 'express'

import localesRouter from './locales'
import weatherRouter from './weather'

const router = express.Router()

router.use('/locale', localesRouter)
router.use('/weather', weatherRouter)

export default router