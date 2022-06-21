import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js' 

// Initialize express
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//settings
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//routes
app.use(indexRoutes)

//static files
app.use(express.static(join(__dirname, 'public')))

//listening the server
app.listen(process.env.PORT || 3000)
console.log('server is listening on port',process.env.PORT || 3000)

