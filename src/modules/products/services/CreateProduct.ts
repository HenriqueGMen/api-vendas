import { prisma } from "@shared/database/prismaClient"
import { ICreateProductDTO } from "../dtos/ICreateProduct.dto"
import { Product } from "../entities/Product"
import { ProductsRepository } from "../repositories/ProductsRepository"
import AppError from "@shared/errors/appError"

export class CreateProduct {
  public async execute({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
    const productsRepository = new ProductsRepository()
    const productExists = await productsRepository.findByName(name)

    if(productExists) {
      throw new AppError("Product already exists!")
    }

    const product = productsRepository.create({ name, price, quantity})

    return product
  }
}