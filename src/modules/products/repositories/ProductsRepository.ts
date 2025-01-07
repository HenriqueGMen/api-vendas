import { prisma } from "@shared/database/prismaClient";
import { Product } from "../entities/Product";
import { ICreateProductDTO } from "../dtos/ICreateProduct.dto";

export class ProductsRepository {
  public async create({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
    const newProduct = await prisma.products.create({
      data: {
        name,
        price,
        quantity
      }
    })

    return newProduct
  }

  public async findAll(): Promise<Product[]> {
    const products = await prisma.products.findMany()

    return products
  }
  
  public async findByName(name: string): Promise<Product[]> {
    const product = await prisma.products.findMany({
      where: { 
        name: {
          contains: name,
          mode: 'insensitive'
        }
      }
    })

    return product
  }
}
