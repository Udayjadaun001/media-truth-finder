
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { InfoIcon, FileCheck, AlertTriangle, Trash2, Download, History, Settings } from 'lucide-react';
import FileUploader from '@/components/FileUploader';
import AnalysisResult from '@/components/AnalysisResult';

type MediaType = 'image' | 'video' | 'audio' | null;

const Dashboard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<MediaType>(null);
  const [activeTab, setActiveTab] = useState<string>('analyze');

  const handleUpload = (uploadedFile: File, type: MediaType) => {
    setFile(uploadedFile);
    setMediaType(type);
  };

  const handleReset = () => {
    setFile(null);
    setMediaType(null);
  };

  const recentAnalyses = [
    { id: 1, name: "Group_Photo.jpg", date: "2023-06-12", result: "Authentic", type: "image", confidence: 92 },
    { id: 2, name: "Meeting_Recording.mp4", date: "2023-06-10", result: "Suspicious", type: "video", confidence: 68 },
    { id: 3, name: "Interview_Audio.mp3", date: "2023-06-08", result: "Fake", type: "audio", confidence: 95 }
  ];

  const getStatusColor = (result: string) => {
    if (result === "Authentic") return "text-real-500";
    if (result === "Suspicious") return "text-amber-500";
    return "text-fake-500";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">John Doe</h3>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>
                <div className="mt-4 space-y-1">
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${activeTab === 'analyze' ? 'bg-deepfake-50 text-deepfake-600' : ''}`}
                    onClick={() => setActiveTab('analyze')}
                  >
                    <FileCheck className="mr-2 h-4 w-4" />
                    Analyze Media
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${activeTab === 'history' ? 'bg-deepfake-50 text-deepfake-600' : ''}`}
                    onClick={() => setActiveTab('history')}
                  >
                    <History className="mr-2 h-4 w-4" />
                    Analysis History
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${activeTab === 'settings' ? 'bg-deepfake-50 text-deepfake-600' : ''}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Account Usage</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Monthly analyses</span>
                      <span className="font-medium">18/50</span>
                    </div>
                    <Progress value={36} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Storage</span>
                      <span className="font-medium">1.2/5GB</span>
                    </div>
                    <Progress value={24} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <TabsContent value="analyze" className={activeTab === 'analyze' ? 'block' : 'hidden'}>
              <Card>
                <CardHeader>
                  <CardTitle>Analyze Media</CardTitle>
                  <CardDescription>
                    Upload an image, video, or audio file for deepfake analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!file ? (
                    <FileUploader onUpload={handleUpload} />
                  ) : (
                    mediaType && <AnalysisResult mediaType={mediaType} file={file} onReset={handleReset} />
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className={activeTab === 'history' ? 'block' : 'hidden'}>
              <Card>
                <CardHeader>
                  <CardTitle>Analysis History</CardTitle>
                  <CardDescription>
                    View your recent media analysis results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAnalyses.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-md ${
                            item.result === "Authentic" ? "bg-green-100" : 
                            item.result === "Suspicious" ? "bg-amber-100" : "bg-red-100"
                          }`}>
                            {item.result === "Authentic" ? (
                              <FileCheck className="h-5 w-5 text-real-500" />
                            ) : item.result === "Suspicious" ? (
                              <AlertTriangle className="h-5 w-5 text-amber-500" />
                            ) : (
                              <InfoIcon className="h-5 w-5 text-fake-500" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{item.date}</span>
                              <span>•</span>
                              <span className="capitalize">{item.type}</span>
                              <span>•</span>
                              <span className={`font-medium ${getStatusColor(item.result)}`}>{item.result}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className={activeTab === 'settings' ? 'block' : 'hidden'}>
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and notification settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue="john.doe@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input id="company" placeholder="Your company name" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive email notifications about your analysis results
                            </p>
                          </div>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Analysis Summaries</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive weekly summaries of your analysis activities
                            </p>
                          </div>
                          <Switch checked={false} />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-deepfake-600 hover:bg-deepfake-700">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
