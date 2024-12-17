import { getAllProducts } from "@/api/backend/productApi"


import { ProductProps } from "@/types/products/product"
import { useQuery } from "@tanstack/react-query"
import React, { useContext ,createContext} from "react"

type ProductProviderProps = {
  children:React.ReactNode
}
type ProductContextProps = {
  productList:ProductProps[];
  isLoading:boolean;
}

export const ProductContext= createContext<ProductContextProps|undefined>(undefined)

export const ProductContextProvider = ({children}:ProductProviderProps) => {
  
  const {data:productList,isLoading} = useQuery({
    queryFn:getAllProducts,
    queryKey:["products"],
    refetchInterval:1000 * 60 * 10,
    staleTime:1000 * 60 * 5

  })

  


  const value = {productList,isLoading}
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider

export const useProductContext = () => useContext(ProductContext)