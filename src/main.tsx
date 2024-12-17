import { createRoot } from 'react-dom/client'
import App from './router/index.tsx'
import './index.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import AuthContextProvider from './context/authContext.tsx'
import ProductContextProvider from './context/productContext.tsx'

const queryClient = new QueryClient()



createRoot(document.getElementById("root")!).render(
<QueryClientProvider client={queryClient}>
<AuthContextProvider>
  <ProductContextProvider>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </ProductContextProvider>
</AuthContextProvider>
</QueryClientProvider>
);
