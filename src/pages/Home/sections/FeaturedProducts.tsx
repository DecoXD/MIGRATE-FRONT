import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { featuredProducts } from "@/constantes"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-accent">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/products">
          <Button variant="outline">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default FeaturedProducts