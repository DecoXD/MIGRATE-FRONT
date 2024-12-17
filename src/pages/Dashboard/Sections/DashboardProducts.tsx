
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pen, Search, Trash } from "lucide-react";
import { useProductContext } from "@/context/productContext";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "@/lib/react-query/queriesAndMutations";

const products = [
  { id: 1, name: "Product 1", price: "$99.99", stock: 50, category: "Electronics" },
  { id: 2, name: "Product 2", price: "$149.99", stock: 30, category: "Accessories" },
  { id: 3, name: "Product 3", price: "$199.99", stock: 20, category: "Electronics" },
];

const DashboardProducts = () => {
  //handle delete 
  const {mutateAsync:deleteProduct} = useDeleteProduct()
  async function handleDelete(id:number){
    try {
      await deleteProduct(id)
    } catch (error) {
      console.log('error to delete product')
      return
    }
  }
  //handle update product
  //handle create product
  const {productList,isLoading} = useProductContext()

  if(isLoading) return <Loader/>


  return (
   
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-muted-foreground">Manage your products here</p>
          </div>
          <Link to={"/dashboard/products/add"} >
          <Button style={{ backgroundColor: "#9B87F5" }} className="hover:bg-[#8B77E5]">
            Add Product
          </Button>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-8" />
          </div>
        </div>

        <div className="rounded-md border ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            {
              productList &&
              <TableBody>
              {productList.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Link to={`/dashboard/products/update/${product.id!}`}>
                      <Button variant="ghost" size="sm">
                        <Pen className="text-secondary"/>
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(product.id)}>
                      <Trash className="text-slate-500"/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            }
          </Table>
        </div>
      </div>
    
  );
};

export default DashboardProducts;