import { getProductById} from "@/api/backend/productApi";
import Loader from "@/components/Loader";
import ProductForm from "@/components/shared/ProductForm"
import { useUpdateProduct } from "@/lib/react-query/queriesAndMutations";
import { ProductProps } from "@/types/products/product"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"

const UpdateProduct = () => {
  //get product by id
  const {id} = useParams();
  let numberId = Number(id)
  const {mutateAsync:updateProduct} = useUpdateProduct()
  const {data:product,isLoading}  = useQuery({queryKey:['product',id],queryFn:() =>getProductById(numberId),staleTime:1000 * 60 * 10,refetchInterval:1000 * 60 * 10})

  if(isLoading) return <Loader/>
  
  async function handleUpdateProduct(product:ProductProps) {
    await updateProduct(product)
  }
  

  return (
    <ProductForm title={"Update Product"} key={"456"} product={product} action="Update" handler={handleUpdateProduct} isLoading={isLoading}/>
  )
}

export default UpdateProduct