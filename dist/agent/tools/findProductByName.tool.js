"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFindProductByNameTool = createFindProductByNameTool;
const tools_1 = require("llamaindex/dist/tools");
function createFindProductByNameTool(productsService) {
    return new tools_1.Tool({
        name: 'findProductByName',
        description: '根据商品名称，返回相关商品',
        func: async (name) => {
            const result = productsService.findByName(name);
            return result.length > 0 ? JSON.stringify(result, null, 2) : '未找到相关商品';
        },
    });
}
//# sourceMappingURL=findProductByName.tool.js.map