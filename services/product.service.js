const Chance = require('chance');
var chance = new Chance();
class ProductService{ //clase para generar productos
constructor() {
  this.products=[]
  this.generate()

}

  generate(){
    const limit = 100
    //console.log(products);
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:chance.guid(),
        city: chance.city(),
        country: chance.country(),
        phone: chance.phone(),
        //image:faker.image.imageUrl()
      })


    };
    }
  create(){
  }

  find()  {
    return this.products
  }

  findOne(id)  {
    return  this.products.find(item=>item.id===id)
  }

  update()  {
  }

  delete()  {
  }
}
module.exports=ProductService
