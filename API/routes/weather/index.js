import express from 'express'

const router = express.Router()

const weatherData = require('./data.json')

router.get('/:id?', async (req, res) => {
	if (!req.params.id) return res.status(400).json({ err: 'Insira o id!' })
	const data = weatherData.find((x) => x.locale.id === parseInt(req.params.id, 10))
	return res
		.status(200)
		.json(data ? { weather: data.weather, locale: data.locale } : {})
})

export default router