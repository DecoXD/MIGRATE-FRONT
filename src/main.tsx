import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import AuthContextProvider from './context/authContext.tsx'
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
<QueryClientProvider client={queryClient}>
<AuthContextProvider>
  <React.StrictMode>
  <App />
  </React.StrictMode>
</AuthContextProvider>
</QueryClientProvider>
);
