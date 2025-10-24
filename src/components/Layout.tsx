import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  userRole: 'Admin' | 'Manager' | 'Staff';
}

export default function Layout({ children, currentPage, onPageChange, onLogout, userRole }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={onPageChange} userRole={userRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onLogout={onLogout} userRole={userRole} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
