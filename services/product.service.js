const Chance = require('chance');
var chance = new Chance();
const boom=require("@hapi/boom")
class ProductService{ //clase para generar productos
constructor() {
  this.products=[]
  this.generate()

}

async generate(){
    const limit = 100
    //console.log(products);
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id:chance.guid(),
        city: chance.city(),
        country: chance.country(),
        phone: chance.phone(),
        isBlocked: chance.bool()
        //image:faker.image.imageUrl()
      })


    };
    }
    async create(data){
    const newProduct={
      id:chance.guid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find()  {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
         resolve(this.products)
      }, 2000);
    })

  }

  async findOne(id)  {
    const product=this.products.find(item=>item.id===id)

    if(!product){
      throw boom.notFound("product not found")
    }
    if(product.isBlocked){
      throw boom.conflict("product is blocked")
    }
    return product
  }

  async update(id,changes)  {

    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
      throw boom.notFound("product not found")
    }
    const product = this.products[index]
  this.products[index] ={
    ...product,
    ...changes
  }
  return this.products[index]


  }

 async delete(id)  {
    const index=this.products.findIndex(item=>item.id===id)
    if(index===-1){
      throw boom.notFound("product not found")
    }
    this.products.splice(index,1)
    return {id}
  }
}
module.exports=ProductService
