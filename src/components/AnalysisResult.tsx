
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

type MediaType = 'image' | 'video' | 'audio';

interface Feature {
  name: string;
  description: string;
  score: number;
}

interface AnalysisResultProps {
  mediaType: MediaType;
  file: File;
  onReset: () => void;
}

const AnalysisResult = ({ mediaType, file, onReset }: AnalysisResultProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [overallScore, setOverallScore] = useState(0);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [conclusion, setConclusion] = useState('');
  const [fakeProbability, setFakeProbability] = useState(0);
  
  useEffect(() => {
    // Simulate API call for analysis
    const timer = setTimeout(() => {
      const result = generateFakeAnalysis(mediaType);
      setOverallScore(result.overall);
      setFeatures(result.features);
      setFakeProbability(result.fakeProbability);
      setConclusion(result.conclusion);
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [mediaType, file]);
  
  const getScoreColor = (score: number) => {
    if (score < 40) return 'text-fake-500';
    if (score < 70) return 'text-amber-500';
    return 'text-real-500';
  };
  
  const getVerdict = () => {
    if (fakeProbability > 85) return { icon: <XCircle className="h-6 w-6 text-fake-500" />, text: 'Likely Fake', color: 'text-fake-500' };
    if (fakeProbability > 25) return { icon: <AlertTriangle className="h-6 w-6 text-amber-500" />, text: 'Suspicious', color: 'text-amber-500' };
    return { icon: <CheckCircle2 className="h-6 w-6 text-real-500" />, text: 'Likely Authentic', color: 'text-real-500' };
  };
  
  const verdict = getVerdict();
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Analysis Results</CardTitle>
        <CardDescription>
          Detailed analysis of your {mediaType} file
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="py-12 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-deepfake-200 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-deepfake-100 flex items-center justify-center relative overflow-hidden">
                  <div className="scanner-line absolute top-0 animate-scanning"></div>
                  {mediaType === 'image' && <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-full" />}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-deepfake-500 opacity-50 animate-pulse-ring"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyzing {mediaType}...</h3>
            <p className="text-gray-500 text-sm mb-6">
              Our AI is examining your {mediaType} for signs of manipulation
            </p>
            <Progress value={Math.random() * 100} className="w-full max-w-md" />
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {verdict.icon}
                <div>
                  <h3 className={`text-xl font-bold ${verdict.color}`}>
                    {verdict.text}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {fakeProbability}% probability of being manipulated
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{overallScore}/100</div>
                <p className="text-sm text-gray-500">Authentication Score</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" /> Analysis Summary
              </h3>
              <p className="text-sm text-gray-600">{conclusion}</p>
            </div>

            <Tabs defaultValue="features">
              <TabsList className="mb-4">
                <TabsTrigger value="features">Detection Features</TabsTrigger>
                <TabsTrigger value="preview">Media Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium">{feature.name}</h4>
                        <span className={`font-bold ${getScoreColor(feature.score)}`}>
                          {feature.score}/100
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{feature.description}</p>
                      <Progress value={feature.score} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="preview">
                <div className="border rounded-lg p-4">
                  {mediaType === 'image' && (
                    <div className="relative">
                      <img 
                        src={URL.createObjectURL(file)} 
                        alt="Analyzed media" 
                        className="w-full h-auto rounded-md"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                        {fakeProbability}% Fake Probability
                      </div>
                    </div>
                  )}
                  
                  {mediaType === 'video' && (
                    <div className="relative">
                      <video 
                        src={URL.createObjectURL(file)} 
                        controls 
                        className="w-full rounded-md"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                        {fakeProbability}% Fake Probability
                      </div>
                    </div>
                  )}
                  
                  {mediaType === 'audio' && (
                    <div className="relative">
                      <audio 
                        src={URL.createObjectURL(file)} 
                        controls 
                        className="w-full mb-4"
                      />
                      <div className="p-4 bg-gray-50 rounded-md">
                        <h4 className="font-medium mb-2">Voice Analysis</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Our system detected {fakeProbability}% probability of synthetic voice patterns.
                        </p>
                        <div className="h-24 bg-gray-200 rounded-md flex items-end p-2">
                          {Array(20).fill(0).map((_, i) => (
                            <div 
                              key={i} 
                              className="w-2 mx-0.5 bg-deepfake-500"
                              style={{ 
                                height: `${Math.random() * 100}%`, 
                                opacity: Math.random() * 0.5 + 0.5 
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </CardContent>
      
      {!isLoading && (
        <CardFooter>
          <Button 
            onClick={onReset} 
            className="w-full"
            variant="outline"
          >
            Analyze Another File
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Helper function to generate fake analysis data
const generateFakeAnalysis = (mediaType: MediaType) => {
  // Randomly determine if we'll show a "fake" or "real" result
  const fakeProbability = Math.random() < 0.5 
    ? Math.floor(Math.random() * 40) // Likely real (0-40%)
    : Math.floor(Math.random() * 40) + 60; // Likely fake (60-100%)
  
  const overall = 100 - fakeProbability;
  
  let features: Feature[] = [];
  let conclusion = '';
  
  if (mediaType === 'image') {
    features = [
      {
        name: 'Noise Pattern Analysis',
        description: 'Examines the noise patterns throughout the image',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 20 : 60)
      },
      {
        name: 'Facial Consistency',
        description: 'Checks for unnatural facial features or inconsistencies',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 10 : 70)
      },
      {
        name: 'Blending Boundaries',
        description: 'Detects unnatural blending at manipulation boundaries',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 30 : 65)
      },
      {
        name: 'Compression Artifacts',
        description: 'Analyzes unusual compression patterns',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 20 : 60)
      }
    ];
    
    conclusion = fakeProbability > 60
      ? 'This image shows signs of manipulation, particularly in the facial region. Inconsistent noise patterns and unusual blending boundaries suggest possible deepfake techniques.'
      : 'This image appears to be authentic with consistent noise patterns and natural facial features. No significant manipulation detected.';
  } else if (mediaType === 'video') {
    features = [
      {
        name: 'Temporal Consistency',
        description: 'Checks for consistency across video frames',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 20 : 60)
      },
      {
        name: 'Facial Feature Persistence',
        description: 'Analyzes facial features for consistent appearance',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 30 : 70)
      },
      {
        name: 'Motion Naturality',
        description: 'Detects unnatural or robotic movements',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 10 : 70)
      },
      {
        name: 'Lighting Consistency',
        description: 'Examines lighting and shadows for inconsistencies',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 30 : 60)
      }
    ];
    
    conclusion = fakeProbability > 60
      ? 'This video displays temporal inconsistencies and unnatural facial movements across frames. The LSTM model identified patterns consistent with deepfake generation.'
      : 'This video shows natural movement patterns and consistent facial features across frames. No significant manipulation detected.';
  } else {
    features = [
      {
        name: 'Voice Pattern Analysis',
        description: 'Analyzes voice patterns for synthetic indicators',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 20 : 60)
      },
      {
        name: 'Spectral Consistency',
        description: 'Checks for unusual spectral patterns',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 30 : 65)
      },
      {
        name: 'Breathing Pattern',
        description: 'Detects natural breathing rhythms in speech',
        score: Math.floor(Math.random() * 30) + (fakeProbability > 60 ? 10 : 70)
      },
      {
        name: 'Emotion Consistency',
        description: 'Analyzes consistency of emotional tone',
        score: Math.floor(Math.random() * 40) + (fakeProbability > 60 ? 30 : 65)
      }
    ];
    
    conclusion = fakeProbability > 60
      ? 'This audio sample contains unnatural voice patterns and lacks consistent breathing characteristics. The LSTM model detected synthetic speech markers.'
      : 'This audio sample demonstrates natural voice patterns with appropriate breathing rhythms and consistent emotional tone. No significant manipulation detected.';
  }
  
  return { overall, features, fakeProbability, conclusion };
};

export default AnalysisResult;
