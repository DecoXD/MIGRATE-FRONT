import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { pricingPlans } from '@/constantes'
import { Check } from 'lucide-react'
import React from 'react'

const PricingPlans = () => {
  return (
    <section className="py-20 bg-accent">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Planos e Preços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* plan card */}
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={`p-6 hover:shadow-lg transition-shadow ${plan.actived?'border-secondary border-2':''}`}>
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">
              R$ {plan.price}
              <span className="text-sm font-normal">/mês</span>
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="secondary">
              Escolher Plano
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default PricingPlans