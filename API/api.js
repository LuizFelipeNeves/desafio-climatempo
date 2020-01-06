import express from 'express'
import serverless from 'serverless-http'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/.netlify/functions/api', routes)

const handler = serverless(app)
export { app, handler }