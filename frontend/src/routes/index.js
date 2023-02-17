
import Home from '../containers/home/Home';
import Login from '../containers/auth/Login';
import DashboardLayout from '../containers/layouts/DashboardLayout';
import Dashboard from '../containers/dashboard/Dashboard';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login}
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard, layout: DashboardLayout }
];

export { publicRoutes, privateRoutes };