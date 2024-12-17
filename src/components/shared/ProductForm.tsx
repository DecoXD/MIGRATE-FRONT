import { productFormItens } from "@/constantes"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import React, { useEffect, useState } from "react"
import { ProductProps } from "@/types/products/product"
import { toast } from "sonner"
import Loader from "../Loader"
import { useNavigate } from "react-router-dom"

type ProductFormProps = {
  title:string,
  product?:ProductProps ,
  action:string,
  handler: (produto:ProductProps) => Promise<void>;
  isLoading?:boolean
}

const ProductForm = ({title,product=undefined,action,handler,isLoading = false}:ProductFormProps) => {

  const navigate = useNavigate()
  const [productItem,setProductItem] = useState<ProductProps>(
    { category:"",
      description:'',
      image:'',
      name:'',
      price:null,
      stock:null })
  

 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>,name:string) =>{
    let typeNumbers={
      price:true,
      stock:true,
      discount:true
    }
    //verify if the current field belongs to type number fields
    let isInt = typeNumbers[name] || false
    let value = e.target.value 
  
    setProductItem(previus => ({
      ...previus,
      [name]:isInt ? Number(value):value // convert from string to number and send to backend
    }))
  }

 
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
   
    try {
      const allFieldsIsFilled = !(Object.values(productItem).some((field) => !field))
     
      if(!allFieldsIsFilled) return toast.error("Por favor, preencha todos os campos")
      await handler(productItem)
      
     navigate('/dashboard/products/')
    } catch (error) {
     
      toast.error("Ocorreu um erro, tente novamente mais tarde")
    }
  }

  if(isLoading)return <Loader/>
  useEffect(() =>{
    if(product) {
      setProductItem({...productItem,...product,["image"]:''})

    }
  },[product])
 
  return (
    <div>
      <div className="flex gap-2 items-center">
      <Plus className="text-secondary" size={30} />
      <h2 className="font-bold text-3xl">{title}</h2>
      </div>
      <form className=" pt-12  flex flex-col gap-6" action="" onSubmit={handleSubmit} >
        {
          productFormItens.map((item,idx) =>{
            if(item.textArea) {
              return (
                <div className="flex flex-col gap-2" key={`${item.label}#${idx}`}>
                  <label className="font-medium">{item.label}</label>
                  <textarea onChange={(e) =>handleChange(e,item.name)} value={productItem[item.name]||""} className="border-2 p-2 rounded-lg " name={item.name} id="" placeholder={item.placeholder}></textarea>
                </div>
                )
            }
            if(item.select){
              return (
                <div className="flex flex-col gap-2" key={`${item.label}#${idx}`}>
                  <label  className="font-medium">
                    {item.label}
                  </label>
                    <select onChange={(e) =>handleChange(e,item.name)} name={item.name} value={productItem[item.name]||""} className="  border-2 p-1 rounded-lg">
                      {
                        item.options.map((opt,idx) => <option className="p-2" value={opt} key={`${opt}#${idx}`}>{opt}</option>)
                      }
                    </select>
                </div>
              )
            }
            return (
              <div className="flex flex-col gap-2" key={`${item.label}#${idx}`}>
                <label className="font-medium">{item.label}</label>
                <input onChange={(e) =>handleChange(e,item.name)} value={productItem[item.name]||''} className=" border-2 p-2 rounded-lg" type={item.type} name={item.name}  placeholder={item.placeholder} />
              </div>
            )
            

          })
        }
        <Button className="bg-secondary hover:bg-secondary/95"> {action} </Button>
      </form>
    </div>
  )
}

export default ProductForm