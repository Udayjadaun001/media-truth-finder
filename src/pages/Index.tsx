
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FileUploader from '@/components/FileUploader';
import AnalysisResult from '@/components/AnalysisResult';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

type MediaType = 'image' | 'video' | 'audio' | null;

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<MediaType>(null);
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  const handleUpload = (uploadedFile: File, type: MediaType) => {
    setFile(uploadedFile);
    setMediaType(type);
  };

  const handleReset = () => {
    setFile(null);
    setMediaType(null);
  };

  const scrollToAnalyzer = () => {
    setShowAnalyzer(true);
    setTimeout(() => {
      document.getElementById('analyzer-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        <div className="container py-8 flex justify-center">
          <Button 
            onClick={scrollToAnalyzer} 
            className="flex items-center gap-2"
            variant="outline"
          >
            Try the detector <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
        
        <HowItWorks />
        
        {showAnalyzer && (
          <section id="analyzer-section" className="py-16 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-deepfake-900 mb-4">
                  Analyze Your Media
                </h2>
                <p className="text-lg text-gray-600">
                  Upload an image, video, or audio file to see our deepfake detection technology in action.
                </p>
              </div>
              
              {!file ? (
                <FileUploader onUpload={handleUpload} />
              ) : (
                mediaType && <AnalysisResult mediaType={mediaType} file={file} onReset={handleReset} />
              )}
            </div>
          </section>
        )}
        
        <section className="py-16 bg-deepfake-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to integrate DeepFake detection into your platform?
              </h2>
              <p className="text-xl mb-8 text-deepfake-100">
                Our API provides enterprise-grade deepfake detection capabilities for your applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-deepfake-900 hover:bg-gray-100">
                  Get API Access
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-deepfake-800">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
