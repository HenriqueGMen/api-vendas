import { Product } from "../entities/Product"
import { ProductsRepository } from "../repositories/ProductsRepository"

export class ListProducts {
  public async execute(): Promise<Product[]> {
    const productsRepository = new ProductsRepository()
    const products = productsRepository.findAll()

    return products
  }
}