import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

export const routes = Router()
const prisma = new PrismaClient

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

routes.post('/products', async (req, res) => {
  try {
    const { name, price, quantity } = req.body

  if (!name || !price || !quantity) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
  }

  const product = await prisma.products.create({
    data: {
      name,
      price,
      quantity
    }
  })

  return res.status(201).json(product)
} catch (error) {
  return res.status(500).json({ error: 'Erro ao criar produto' })
}
})
