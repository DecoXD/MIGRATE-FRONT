import { createProduct } from "@/api/backend/productApi"
import ProductForm from "@/components/shared/ProductForm"
import { ProductProps } from "@/types/products/product"


const CreateProduct = ():JSX.Element => {

  
  async function handleCreateProduct(product:ProductProps) {
    createProduct(product)
  }

  return (
    <ProductForm title={"Create Product"} key={"123"} product={null} action="Create" handler={handleCreateProduct}/>
  )
}

export default CreateProduct