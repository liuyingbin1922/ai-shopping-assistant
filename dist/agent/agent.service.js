"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentService = void 0;
const common_1 = require("@nestjs/common");
const llamaindex_1 = require("llamaindex");
const products_service_1 = require("../products/products.service");
const findProductByCategory_tool_1 = require("./tools/findProductByCategory.tool");
const findProductByName_tool_1 = require("./tools/findProductByName.tool");
let AgentService = class AgentService {
    constructor(productsService) {
        this.productsService = productsService;
        const llm = new llamaindex_1.OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-4-turbo'
        });
        const tools = [
            (0, findProductByCategory_tool_1.createFindProductByCategoryTool)(this.productsService),
            (0, findProductByName_tool_1.createFindProductByNameTool)(this.productsService),
        ];
        this.agent = new llamaindex_1.Agent({
            llm,
            tools,
            systemPrompt: '你是一个AI商品导购助手，帮用户推荐商品。'
        });
    }
    async ask(prompt) {
        const response = await this.agent.chat(prompt);
        return response.message.content;
    }
};
exports.AgentService = AgentService;
exports.AgentService = AgentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], AgentService);
//# sourceMappingURL=agent.service.js.map