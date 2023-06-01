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
  create(data){
    const newProduct={
      id:chance.guid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find()  {
    return this.products
  }

  findOne(id)  {
    return  this.products.find(item=>item.id===id)
  }

  update(id,changes)  {

    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
      throw new Error("product not found")
    }
    const product = this.products[index]
  this.products[index] ={
    ...product,
    ...changes
  }
  return this.products[index]


  }

  delete(id)  {
    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
      throw new Error("product not found")
    }
    this.products.splice(index,1)
    return {id}
  }
}
module.exports=ProductService
