
import React from 'react';
import { Check, Shield, Monitor, Database } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-deepfake-900 mb-4">
            How Our DeepFake Detection Works
          </h2>
          <p className="text-lg text-gray-600">
            Our advanced AI-powered system uses multiple neural network models to analyze and identify synthetic media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Media</h3>
            <p className="text-sm text-gray-500">
              Upload an image, video, or audio file through our secure interface for analysis.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Encrypted transfer
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Formats supported: JPG, PNG, MP4, WAV, etc.
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Up to 10MB file size
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pre-processing</h3>
            <p className="text-sm text-gray-500">
              Our system pre-processes the media file to optimize it for analysis by our neural networks.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Format normalization
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Feature extraction
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Noise pattern isolation
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Deep Analysis</h3>
            <p className="text-sm text-gray-500">
              Multiple AI models analyze different aspects of the media to detect synthetic elements.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                CNN for image detection
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                LSTM for temporal consistency
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Spectrum analysis for audio
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Results</h3>
            <p className="text-sm text-gray-500">
              Get comprehensive results with confidence scores and detailed analysis of media authenticity.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Authenticity score
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Feature-based breakdown
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-real-500 mr-2" />
                Highlighted manipulations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
