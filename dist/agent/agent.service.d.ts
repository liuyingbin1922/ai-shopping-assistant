import { ProductsService } from '../products/products.service';
export declare class AgentService {
    private productsService;
    private agent;
    constructor(productsService: ProductsService);
    ask(prompt: string): Promise<any>;
}
