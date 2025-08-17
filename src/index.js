import express from 'express'
import { PORT } from './config.js'
import usersRoutes from './routes/users.routes.js'
import 'dotenv/config';
console.log(process.env.PORT);

const app = express()

app.use(express.json())
app.use(usersRoutes)

app.listen(PORT)
console.log('server on port', PORT)

