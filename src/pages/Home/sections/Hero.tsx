import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b   text-black  flex items-center">
    <div className="container mx-auto py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Transforme seu Marketing Digital
        </h1>
        <p className="text-xl mb-8 text-gray-700 animate-fade-in">
          Soluções completas para impulsionar seu negócio no mundo digital.
          Marketing estratégico, tráfego pago e resultados comprovados.
        </p>
        <Link to="/products">
          <Button size="lg" variant="secondary" className="animate-fade-in">
            Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero