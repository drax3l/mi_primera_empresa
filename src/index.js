import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
const app= express()
const __dirmname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirmname,'views'))

app.set('views', join(__dirmname,'views'))
app.set('view engine', 'ejs')
app.use(router)
app.use(express.static(join(__dirmname,'public')))

app.listen(3000)
console.log('el server esta siendo escuchado en el puerto 3000')