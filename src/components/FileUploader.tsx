
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image as ImageIcon, Video as VideoIcon, Music as AudioIcon, Upload, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type MediaType = 'image' | 'video' | 'audio' | null;

const FileUploader = ({ onUpload }: { onUpload: (file: File, type: MediaType) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<MediaType>(null);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      processFile(uploadedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      processFile(uploadedFile);
    }
  };

  const processFile = (uploadedFile: File) => {
    const fileType = uploadedFile.type;
    
    if (fileType.startsWith('image/') && mediaType === 'image') {
      setFile(uploadedFile);
    } else if (fileType.startsWith('video/') && mediaType === 'video') {
      setFile(uploadedFile);
    } else if (fileType.startsWith('audio/') && mediaType === 'audio') {
      setFile(uploadedFile);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: `Please upload a ${mediaType} file.`
      });
      return;
    }
  };

  const handleTabChange = (value: string) => {
    setMediaType(value as MediaType);
    setFile(null);
  };

  const handleSubmit = () => {
    if (file && mediaType) {
      onUpload(file, mediaType);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="image" onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="image" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Image
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <VideoIcon className="h-4 w-4" /> Video
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <AudioIcon className="h-4 w-4" /> Audio
            </TabsTrigger>
          </TabsList>
          
          {['image', 'video', 'audio'].map((type) => (
            <TabsContent key={type} value={type}>
              {!file ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${
                    dragActive ? 'border-deepfake-500 bg-deepfake-50' : 'border-gray-300'
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDragActive(true);
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDragActive(false);
                  }}
                  onDrop={handleFileDrop}
                >
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Drop your {type} file here</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      or click to browse (max 10MB)
                    </p>
                    <input
                      id={`file-upload-${type}`}
                      type="file"
                      className="hidden"
                      accept={`${type}/*`}
                      onChange={handleFileChange}
                    />
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById(`file-upload-${type}`)?.click()}
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      {type === 'image' && <ImageIcon className="h-5 w-5 text-deepfake-600 mr-2" />}
                      {type === 'video' && <VideoIcon className="h-5 w-5 text-deepfake-600 mr-2" />}
                      {type === 'audio' && <AudioIcon className="h-5 w-5 text-deepfake-600 mr-2" />}
                      <span className="font-medium truncate max-w-xs">{file.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleRemoveFile}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {type === 'image' && file && (
                    <div className="mb-4 relative rounded-md overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="w-full h-auto object-contain max-h-[300px]"
                      />
                    </div>
                  )}
                  
                  {type === 'video' && file && (
                    <div className="mb-4 relative rounded-md overflow-hidden">
                      <video
                        src={URL.createObjectURL(file)}
                        controls
                        className="w-full h-auto max-h-[300px]"
                      />
                    </div>
                  )}
                  
                  {type === 'audio' && file && (
                    <div className="mb-4">
                      <audio
                        src={URL.createObjectURL(file)}
                        controls
                        className="w-full"
                      />
                    </div>
                  )}
                  
                  <Button 
                    className="w-full bg-deepfake-600 hover:bg-deepfake-700" 
                    onClick={handleSubmit}
                  >
                    Analyze {type}
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
