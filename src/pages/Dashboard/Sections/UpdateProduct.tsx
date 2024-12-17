import ProductForm from "@/components/shared/ProductForm"
import { ProductProps } from "@/types/products/product"

const UpdateProduct = () => {
  //get product by id

  async function handleCreateProduct(product:ProductProps) {
    console.log('update product')
  }

  return (
    <ProductForm title={"Update Product"} key={"456"} product={null} action="Update" handler={handleCreateProduct}/>
  )
}

export default UpdateProduct