import { categories } from "@/constantes"
import { Link } from "react-router-dom"


const Categories = () => {
  return (
    <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.name}`}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Categories