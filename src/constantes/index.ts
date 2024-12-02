export const pricingPlans = [
    {
      name: "Starter",
      price: 600,
      actived:false,
      features: [
        "Marketing",
        "Tráfego Pago",
        "4 Cards Mensais"
      ]
    },{
        name: "Black",
        price: 2000,
        actived:true,
        features: [
          "Todos os benefícios Premium",
          "+5 Vídeos",
          "Software de gestão CRM",
          "Atendimento automatizado WhatsApp",
          "Website Landing Page",
          "Suporte por 1 ano"
        ]
      },
    {
      name: "Premium",
      price: 1100,
      actived:false,
      features: [
        "Tráfego Pago",
        "Google ADS",
        "5 Vídeos",
        "8 Postagens por mês"
      ]
    }
    
  ];

export const categories = [
    { name: 'Marketing', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
    { name: 'Sites e Sistemas', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
    { name: 'Artes', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46' },
    { name: 'Social Media', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46' },
  ];

  
export const featuredProducts = [
    {
      id: '1',
      name: 'Premium Laptop',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      category: 'Laptops',
      featured: true,
    },
    {
      id: '2',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with long battery life',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
      category: 'Accessories',
      featured: true,
    },
  ];

export const registerInputs = [

  {
    name:"nome",
    placeholder:"Digite seu Nome",
    type:'text',
    icon:"/assets/icons/person.svg"
    
  },
  {
    name:"email",
    placeholder:"Digite seu Email",
    type:'text',
    icon:"/assets/icons/mail.svg"
    
  },
  {
    name:"password",
    placeholder:"Insira sua senha",
    type:"password",
    icon:"/assets/icons/password.svg"
  },
  {
    name:"confirm password",
    placeholder:"Confirme sua senha",
    type:"password",
    icon:"/assets/icons/password.svg"
  }
]
export const loginInputs = [
  {
    name:"email",
    placeholder:"Digite seu Email",
    type:'text',
    icon:"/assets/icons/mail.svg",
    
    
  },
  {
    name:"password",
    placeholder:"Insira sua senha",
    type:"password",
    icon:"/assets/icons/password.svg"

  }
]