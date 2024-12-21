
import { ProductsRepository } from '@modules/products/repositories/ProductsRepository'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

export const routes = Router()
const prisma = new PrismaClient
const productsRepository = new ProductsRepository()

routes.post('/products', async (req, res) => {
  try {
    const { name, price, quantity } = req.body

  if (!name || !price || !quantity) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
  }

  const product = await productsRepository.create({ name, price, quantity})

  return res.status(201).json(product)
} catch (error) {
  return res.status(500).json({ error: 'Erro ao criar produto: ' + error })
}
})

routes.get('/products', async (req, res) => {
  try {
    const { name } = req.query
    
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Nome do produto é obrigatório' })
    }

    const products = await productsRepository.findByName(name)
  
    return res.status(200).json(products)
  } catch (error) {{
      return res.status(500).json({ error: `Erro ao buscar produto: ${error}`})
  }}

})
