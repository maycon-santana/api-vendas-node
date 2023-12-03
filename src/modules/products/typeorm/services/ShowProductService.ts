import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../repositories/ProductsRepository';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
    id: string;
}

class ShowProductService {
    public async execute({ id }: IRequest): Promise<Product | undefined> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = productRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found.');
        }

        return product;
    }
} 

export default ShowProductService;