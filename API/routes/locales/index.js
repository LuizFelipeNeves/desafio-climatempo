import express from 'express'

const router = express.Router()

const localesData = require('./data.json')

router.get('/:name?', (req, res) => {
	if (req.params.name) {
		const regex = new RegExp(`^${req.params.name.toLowerCase()}`)
		const data = localesData.filter((loc) => loc.name.toLowerCase().match(regex))
		return res.status(200).json(data)
	}
	return res.status(200).json(localesData)
})

export default router