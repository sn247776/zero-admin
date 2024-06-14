import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '@/layouts/dashboard/dashboard-layout';
import HomePage from '@/pages/home/home';
import AuthLayout from './layouts/auth-layout';
import BooksPage from './pages/books/books';
import CreateBook from './pages/books/create-book';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard/home" />,
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'books',
                element: <BooksPage />,
            },
            {
                path: 'books/create',
                element: <CreateBook />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;
