import ProductForm from "@/components/shared/ProductForm"
import { useCreateProduct } from "@/lib/react-query/queriesAndMutations"
import { ProductProps } from "@/types/products/product"


const CreateProduct = ():JSX.Element => {
  const {mutateAsync:createProduct} = useCreateProduct()
  
  async function handleCreateProduct(product:ProductProps) {
    await createProduct(product)
  }

  return (
    <ProductForm title={"Create Product"} key={"123"} product={null} action="Create" handler={handleCreateProduct}/>
  )
}

export default CreateProduct