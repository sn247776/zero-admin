import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import { ThemeProvider } from './components/theme/theme-provider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
