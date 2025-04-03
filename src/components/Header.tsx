
import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLoggedIn = location.pathname === '/dashboard';
  
  return (
    <header className="w-full py-4 border-b bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <ShieldAlert className="h-6 w-6 text-deepfake-600" />
          <h1 className="text-xl font-bold text-deepfake-800">DeepFake Detector</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="/#how-it-works">How it Works</a>
            </li>
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="/api-docs">API</a>
            </li>
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="hidden sm:inline-flex"
              >
                Sign In
              </Button>
              <Button 
                className="bg-deepfake-600 hover:bg-deepfake-700"
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
