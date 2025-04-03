
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image, Video, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleTryNow = () => {
    const analyzerSection = document.getElementById('analyzer-section');
    if (analyzerSection) {
      analyzerSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-deepfake-900 mb-6">
          Detect DeepFakes with Advanced AI Technology
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Our powerful tool uses cutting-edge neural networks to analyze images, videos, 
          and audio to identify synthetic media with high accuracy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-deepfake-600 hover:bg-deepfake-700"
            onClick={handleTryNow}
          >
            Try Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/api-docs')}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4 mx-auto">
              <Image className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Image Analysis</h3>
            <p className="text-gray-500 text-sm">
              Detects noise patterns, inconsistencies, unnatural blending, and facial anomalies
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-white shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4 mx-auto">
              <Video className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Video Analysis</h3>
            <p className="text-gray-500 text-sm">
              Frame-by-frame analysis with temporal consistency checking using LSTM networks
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-white shadow-md border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-deepfake-100 flex items-center justify-center mb-4 mx-auto">
              <Music className="h-6 w-6 text-deepfake-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Audio Analysis</h3>
            <p className="text-gray-500 text-sm">
              Identifies spectral inconsistencies, unnatural voice patterns, and synthetic speech markers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
