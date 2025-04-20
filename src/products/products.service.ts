import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private products = [];

  constructor() {
    const dataPath = path.join(__dirname, 'products.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    this.products = JSON.parse(jsonData);
  }

  findByCategory(category: string) {
    return this.products.filter(p => p.category.includes(category));
  }

  findByName(name: string) {
    return this.products.find(p => p.name.includes(name));
  }
}
