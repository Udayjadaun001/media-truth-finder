
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-deepfake-800 mb-4">DeepFake Detector</h3>
            <p className="text-sm text-gray-500 mb-4">
              Cutting-edge deepfake detection technology powered by advanced neural networks.
              Our tool helps you identify synthetic media across images, videos, and audio files.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">API Reference</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Research Papers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-deepfake-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} DeepFake Detector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
