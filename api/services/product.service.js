const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  //post
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

 async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

 async find() {
    return this.products;
  }

 async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  //patch
 async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ... product,
      ... changes
    };
    return this.products[index];
  }

  //delete
 async delete(id) {
const index=this.products.findIndex(item=> item.id ===id);
if(index === -1){
  throw new Error('product not found');
}
this.products.splice(index,1);
return {message:true};
  }

}
module.exports = ProductsService
