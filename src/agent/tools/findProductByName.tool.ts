import { Tool } from 'llamaindex';
import { ProductsService } from '../../products/products.service';

export function createFindProductByNameTool(productsService: ProductsService) {
  return new Tool({
    name: 'findProductByName',
    description: '根据商品名称，返回相关商品',
    func: async (name: string) => {
      const result = productsService.findByName(name);
      return result.length > 0 ? JSON.stringify(result, null, 2) : '未找到相关商品';
    },
  });
}
