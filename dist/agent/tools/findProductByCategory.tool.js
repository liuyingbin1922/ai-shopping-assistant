"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFindProductByCategoryTool = createFindProductByCategoryTool;
const tools_1 = require("llamaindex/dist/tools");
function createFindProductByCategoryTool(productsService) {
    return new tools_1.Tool({
        name: 'findProductByCategory',
        description: '根据商品分类，返回相关商品',
        func: async (category) => {
            const result = productsService.findByCategory(category);
            return result.length > 0 ? JSON.stringify(result, null, 2) : '未找到相关商品';
        },
    });
}
//# sourceMappingURL=findProductByCategory.tool.js.map