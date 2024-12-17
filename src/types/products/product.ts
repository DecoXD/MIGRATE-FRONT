export type ProductProps = {
  id?: number;  
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  discount?: number;
  created_at?: Date;
  product_owner?: string;
}