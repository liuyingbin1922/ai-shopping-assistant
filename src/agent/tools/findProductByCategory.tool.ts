import { Tool } from 'llamaindex';
import { ProductsService } from '../../products/products.service';

export function createFindProductByCategoryTool(productsService: ProductsService) {
  return new Tool({
    name: 'findProductByCategory',
    description: '根据商品分类，返回相关商品',
    func: async (category: string) => {
      const result = productsService.findByCategory(category);
      return result.length > 0 ? JSON.stringify(result, null, 2) : '未找到相关商品';
    },
  });
}
