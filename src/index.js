import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app= express()
const __dirmname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirmname,'views'))

app.set('views', join(__dirmname,'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.listen(3000)
console.log('el server esta siendo escuchado en el puerto 3000')