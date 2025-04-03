
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 border-b bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-deepfake-600" />
          <h1 className="text-xl font-bold text-deepfake-800">DeepFake Detector</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="#">How it Works</a>
            </li>
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="#">API</a>
            </li>
            <li className="text-sm font-medium text-deepfake-900 hover:text-deepfake-600 transition-colors">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
