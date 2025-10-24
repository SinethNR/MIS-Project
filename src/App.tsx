import { useState } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Procurement from './components/Procurement';
import Finance from './components/Finance';
import HR from './components/HR';
import CustomerService from './components/CustomerService';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [userRole, setUserRole] = useState<'Admin' | 'Manager' | 'Staff'>('Admin');

  const handleLogin = (role: 'Admin' | 'Manager' | 'Staff') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'sales':
        return <Sales />;
      case 'inventory':
        return <Inventory />;
      case 'procurement':
        return <Procurement />;
      case 'finance':
        return <Finance />;
      case 'hr':
        return <HR />;
      case 'customer-service':
        return <CustomerService />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings userRole={userRole} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Layout
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
        userRole={userRole}
      >
        {renderPage()}
      </Layout>
      <Toaster />
    </>
  );
}
