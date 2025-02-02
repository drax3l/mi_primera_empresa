import { Router } from "express"

const router = Router()
router.get('/', (req, res) => res.render('index', { title: 'pagina de mi empresa' }))
router.get('/about', (req, res) => res.render('about', { title: 'sobre nosotros' }))
router.get('/contact', (req, res) => res.render('contact', { title: 'contactanos' }))

export default router