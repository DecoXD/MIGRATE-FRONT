import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { categories, featuredProducts, pricingPlans } from '@/constantes';
import { Categories, FeaturedProducts, Hero, PricingPlans } from './sections';






const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Hero/>
      
      <FeaturedProducts/>    
      
      <Categories/>
    
      <PricingPlans/>
    </div>
  );
};

export default Index;