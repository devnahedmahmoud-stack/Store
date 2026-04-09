import React from 'react'
import { RouterProvider } from 'react-router'
import { routes } from '@/routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient=new QueryClient(
  {
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false, //disable refetching when the window regains focus
        staleTime:1000*60*5,//cashe data for 5 minutes
        refetchInterval:false //disable automatic refetching
    }
    }
  }
);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
}

export default App