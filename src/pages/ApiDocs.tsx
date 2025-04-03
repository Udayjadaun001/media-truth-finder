
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle2, Code } from 'lucide-react';

const ApiDocs = () => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  
  const copyToClipboard = (text: string, snippetId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(snippetId);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-deepfake-900 text-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">DeepFake Detector API</h1>
              <p className="text-xl text-deepfake-100 mb-6">
                Integrate our powerful AI-based deepfake detection into your applications with a few lines of code.
              </p>
              <Button className="bg-white text-deepfake-900 hover:bg-gray-100">
                Get API Key
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-12">
                <section id="introduction">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-gray-600 mb-6">
                    Our DeepFake Detector API provides developers with powerful tools to analyze media content for signs of manipulation or synthetic generation. The API supports images, videos, and audio files.
                  </p>
                  <Card>
                    <CardHeader>
                      <CardTitle>Base URL</CardTitle>
                      <CardDescription>All API requests should be made to this base URL</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                        https://api.deepfakedetector.com/v1
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="authentication">
                  <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                  <p className="text-gray-600 mb-6">
                    All API requests require authentication using an API key. You can obtain your API key from the dashboard after signing up for an account.
                  </p>
                  <Card>
                    <CardHeader>
                      <CardTitle>API Key Authentication</CardTitle>
                      <CardDescription>Include your API key in the headers of all requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                        <pre>{`{
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY"
  }
}`}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                <section id="endpoints">
                  <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
                  
                  <Tabs defaultValue="image">
                    <TabsList className="mb-6">
                      <TabsTrigger value="image">Image Analysis</TabsTrigger>
                      <TabsTrigger value="video">Video Analysis</TabsTrigger>
                      <TabsTrigger value="audio">Audio Analysis</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="image">
                      <Card>
                        <CardHeader>
                          <CardTitle>Analyze Image</CardTitle>
                          <CardDescription>POST /analyze/image</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Request</h4>
                              <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                                  onClick={() => copyToClipboard(`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/image \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@/path/to/image.jpg" \\
  -F "detailed=true"`, "image-curl")}
                                >
                                  {copiedSnippet === "image-curl" ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                                <pre>{`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/image \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@/path/to/image.jpg" \\
  -F "detailed=true"`}</pre>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Response</h4>
                              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <pre>{`{
  "id": "analysis_123456",
  "status": "success",
  "result": {
    "is_fake_probability": 0.87,
    "authenticity_score": 13,
    "detection_features": [
      {
        "name": "Noise Pattern Analysis",
        "score": 25,
        "description": "Unusual noise patterns detected"
      },
      {
        "name": "Facial Consistency",
        "score": 18,
        "description": "Inconsistencies in facial features"
      },
      // Additional features...
    ],
    "areas_of_concern": [
      {
        "x1": 120, "y1": 80,
        "x2": 240, "y2": 210,
        "confidence": 0.92,
        "type": "facial_manipulation"
      }
    ]
  },
  "processing_time": 1.24
}`}</pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="video">
                      <Card>
                        <CardHeader>
                          <CardTitle>Analyze Video</CardTitle>
                          <CardDescription>POST /analyze/video</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Request</h4>
                              <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                                  onClick={() => copyToClipboard(`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/video \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "video=@/path/to/video.mp4" \\
  -F "detailed=true"`, "video-curl")}
                                >
                                  {copiedSnippet === "video-curl" ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                                <pre>{`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/video \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "video=@/path/to/video.mp4" \\
  -F "detailed=true"`}</pre>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Response</h4>
                              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <pre>{`{
  "id": "analysis_789012",
  "status": "success",
  "result": {
    "is_fake_probability": 0.92,
    "authenticity_score": 8,
    "detection_features": [
      {
        "name": "Temporal Consistency",
        "score": 15,
        "description": "Inconsistencies across frames"
      },
      {
        "name": "Motion Naturality",
        "score": 12,
        "description": "Unnatural movement patterns"
      },
      // Additional features...
    ],
    "frame_analysis": {
      "total_frames": 450,
      "problematic_frames": [23, 87, 124, 198, 256, 301],
      "key_frames": [
        {
          "frame": 87,
          "timestamp": "00:00:03.48",
          "fake_probability": 0.97,
          "issues": ["facial_mismatch", "unnatural_movement"]
        }
      ]
    }
  },
  "processing_time": 8.56
}`}</pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="audio">
                      <Card>
                        <CardHeader>
                          <CardTitle>Analyze Audio</CardTitle>
                          <CardDescription>POST /analyze/audio</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Request</h4>
                              <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                                  onClick={() => copyToClipboard(`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/audio \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "audio=@/path/to/audio.mp3" \\
  -F "detailed=true"`, "audio-curl")}
                                >
                                  {copiedSnippet === "audio-curl" ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                                <pre>{`curl -X POST \\
  https://api.deepfakedetector.com/v1/analyze/audio \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "audio=@/path/to/audio.mp3" \\
  -F "detailed=true"`}</pre>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Response</h4>
                              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                                <pre>{`{
  "id": "analysis_345678",
  "status": "success",
  "result": {
    "is_fake_probability": 0.89,
    "authenticity_score": 11,
    "detection_features": [
      {
        "name": "Voice Pattern Analysis",
        "score": 14,
        "description": "Synthetic voice patterns detected"
      },
      {
        "name": "Breathing Consistency",
        "score": 9,
        "description": "Unnatural breathing patterns"
      },
      // Additional features...
    ],
    "segment_analysis": [
      {
        "start_time": "00:00:05",
        "end_time": "00:00:12",
        "fake_probability": 0.96,
        "issues": ["synthetic_patterns", "voice_inconsistency"]
      },
      {
        "start_time": "00:01:23",
        "end_time": "00:01:35",
        "fake_probability": 0.94,
        "issues": ["spectral_anomalies"]
      }
    ]
  },
  "processing_time": 3.12
}`}</pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </section>
                
                <section id="code-samples">
                  <h2 className="text-2xl font-bold mb-4">Code Samples</h2>
                  
                  <Tabs defaultValue="javascript">
                    <TabsList className="mb-6">
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                      <TabsTrigger value="java">Java</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="javascript">
                      <Card>
                        <CardHeader>
                          <CardTitle>JavaScript Example</CardTitle>
                          <CardDescription>Using the Fetch API</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                              onClick={() => copyToClipboard(`// Analyze an image using the DeepFake Detector API
const analyzeImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('detailed', 'true');

  try {
    const response = await fetch('https://api.deepfakedetector.com/v1/analyze/image', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: formData
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to analyze image');
    }
    
    return result;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};`, "js-code")}
                            >
                              {copiedSnippet === "js-code" ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                            <pre>{`// Analyze an image using the DeepFake Detector API
const analyzeImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('detailed', 'true');

  try {
    const response = await fetch('https://api.deepfakedetector.com/v1/analyze/image', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: formData
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to analyze image');
    }
    
    return result;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};`}</pre>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="python">
                      <Card>
                        <CardHeader>
                          <CardTitle>Python Example</CardTitle>
                          <CardDescription>Using the Requests library</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                              onClick={() => copyToClipboard(`import requests

def analyze_image(image_path, api_key):
    """
    Analyze an image using the DeepFake Detector API
    
    Args:
        image_path: Path to the image file
        api_key: Your API key
        
    Returns:
        Analysis results as a dictionary
    """
    url = "https://api.deepfakedetector.com/v1/analyze/image"
    
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    with open(image_path, "rb") as image_file:
        files = {"image": image_file}
        data = {"detailed": "true"}
        
        response = requests.post(url, headers=headers, files=files, data=data)
        
        if response.status_code != 200:
            raise Exception(f"API request failed: {response.text}")
            
        return response.json()

# Example usage
if __name__ == "__main__":
    result = analyze_image("path/to/image.jpg", "YOUR_API_KEY")
    print(f"Fake probability: {result['result']['is_fake_probability']}")
    print(f"Authenticity score: {result['result']['authenticity_score']}")`, "python-code")}
                            >
                              {copiedSnippet === "python-code" ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                            <pre>{`import requests

def analyze_image(image_path, api_key):
    """
    Analyze an image using the DeepFake Detector API
    
    Args:
        image_path: Path to the image file
        api_key: Your API key
        
    Returns:
        Analysis results as a dictionary
    """
    url = "https://api.deepfakedetector.com/v1/analyze/image"
    
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    
    with open(image_path, "rb") as image_file:
        files = {"image": image_file}
        data = {"detailed": "true"}
        
        response = requests.post(url, headers=headers, files=files, data=data)
        
        if response.status_code != 200:
            raise Exception(f"API request failed: {response.text}")
            
        return response.json()

# Example usage
if __name__ == "__main__":
    result = analyze_image("path/to/image.jpg", "YOUR_API_KEY")
    print(f"Fake probability: {result['result']['is_fake_probability']}")
    print(f"Authenticity score: {result['result']['authenticity_score']}")`}</pre>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="java">
                      <Card>
                        <CardHeader>
                          <CardTitle>Java Example</CardTitle>
                          <CardDescription>Using HttpClient (Java 11+)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="relative bg-gray-100 p-3 rounded-md font-mono text-sm">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-2 right-2 h-6 w-6 text-gray-500 hover:text-deepfake-600"
                              onClick={() => copyToClipboard(`import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class DeepFakeDetectorExample {

    private static final String API_URL = "https://api.deepfakedetector.com/v1/analyze/image";
    private static final String API_KEY = "YOUR_API_KEY";

    public static void main(String[] args) throws IOException, InterruptedException {
        Path imagePath = Path.of("path/to/image.jpg");
        String result = analyzeImage(imagePath);
        System.out.println(result);
    }

    public static String analyzeImage(Path imagePath) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newBuilder().build();

        // Create a unique boundary for multipart form
        String boundary = "Boundary-" + System.currentTimeMillis();

        // Prepare the multipart form data
        Map<String, Object> data = new HashMap<>();
        data.put("image", imagePath);
        data.put("detailed", "true");

        String multipartData = createMultipartFormData(boundary, data);

        // Build and send the request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(API_URL))
                .header("Content-Type", "multipart/form-data; boundary=" + boundary)
                .header("Authorization", "Bearer " + API_KEY)
                .POST(HttpRequest.BodyPublishers.ofString(multipartData))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IOException("API request failed: " + response.body());
        }

        return response.body();
    }

    private static String createMultipartFormData(String boundary, Map<String, Object> data) throws IOException {
        StringBuilder builder = new StringBuilder();

        for (Map.Entry<String, Object> entry : data.entrySet()) {
            builder.append("--").append(boundary).append("\\r\\n");
            
            if (entry.getValue() instanceof Path) {
                Path filePath = (Path) entry.getValue();
                String mimeType = Files.probeContentType(filePath);
                byte[] fileContent = Files.readAllBytes(filePath);
                
                builder.append("Content-Disposition: form-data; name=\\"").append(entry.getKey())
                       .append("\\"; filename=\\"").append(filePath.getFileName()).append("\\"\\r\\n");
                builder.append("Content-Type: ").append(mimeType).append("\\r\\n\\r\\n");
                builder.append(new String(fileContent)).append("\\r\\n");
            } else {
                builder.append("Content-Disposition: form-data; name=\\"").append(entry.getKey()).append("\\"\\r\\n\\r\\n");
                builder.append(entry.getValue()).append("\\r\\n");
            }
        }

        builder.append("--").append(boundary).append("--");
        return builder.toString();
    }
}`, "java-code")}
                            >
                              {copiedSnippet === "java-code" ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                            <pre>{`import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class DeepFakeDetectorExample {

    private static final String API_URL = "https://api.deepfakedetector.com/v1/analyze/image";
    private static final String API_KEY = "YOUR_API_KEY";

    public static void main(String[] args) throws IOException, InterruptedException {
        Path imagePath = Path.of("path/to/image.jpg");
        String result = analyzeImage(imagePath);
        System.out.println(result);
    }

    public static String analyzeImage(Path imagePath) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newBuilder().build();

        // Create a unique boundary for multipart form
        String boundary = "Boundary-" + System.currentTimeMillis();

        // Prepare the multipart form data
        Map<String, Object> data = new HashMap<>();
        data.put("image", imagePath);
        data.put("detailed", "true");

        String multipartData = createMultipartFormData(boundary, data);

        // Build and send the request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(API_URL))
                .header("Content-Type", "multipart/form-data; boundary=" + boundary)
                .header("Authorization", "Bearer " + API_KEY)
                .POST(HttpRequest.BodyPublishers.ofString(multipartData))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            throw new IOException("API request failed: " + response.body());
        }

        return response.body();
    }

    private static String createMultipartFormData(String boundary, Map<String, Object> data) throws IOException {
        StringBuilder builder = new StringBuilder();

        for (Map.Entry<String, Object> entry : data.entrySet()) {
            builder.append("--").append(boundary).append("\\r\\n");
            
            if (entry.getValue() instanceof Path) {
                Path filePath = (Path) entry.getValue();
                String mimeType = Files.probeContentType(filePath);
                byte[] fileContent = Files.readAllBytes(filePath);
                
                builder.append("Content-Disposition: form-data; name=\\"").append(entry.getKey())
                       .append("\\"; filename=\\"").append(filePath.getFileName()).append("\\"\\r\\n");
                builder.append("Content-Type: ").append(mimeType).append("\\r\\n\\r\\n");
                builder.append(new String(fileContent)).append("\\r\\n");
            } else {
                builder.append("Content-Disposition: form-data; name=\\"").append(entry.getKey()).append("\\"\\r\\n\\r\\n");
                builder.append(entry.getValue()).append("\\r\\n");
            }
        }

        builder.append("--").append(boundary).append("--");
        return builder.toString();
    }
}`}</pre>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </section>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Card>
                  <CardHeader>
                    <CardTitle>API Reference</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <a href="#introduction" className="block text-deepfake-600 hover:underline font-medium">Introduction</a>
                      </div>
                      <div>
                        <a href="#authentication" className="block text-deepfake-600 hover:underline font-medium">Authentication</a>
                      </div>
                      <div>
                        <a href="#endpoints" className="block text-deepfake-600 hover:underline font-medium">Endpoints</a>
                        <div className="ml-4 mt-2 space-y-2">
                          <a href="#endpoints" className="block text-sm text-gray-600 hover:text-deepfake-600">Image Analysis</a>
                          <a href="#endpoints" className="block text-sm text-gray-600 hover:text-deepfake-600">Video Analysis</a>
                          <a href="#endpoints" className="block text-sm text-gray-600 hover:text-deepfake-600">Audio Analysis</a>
                        </div>
                      </div>
                      <div>
                        <a href="#code-samples" className="block text-deepfake-600 hover:underline font-medium">Code Samples</a>
                        <div className="ml-4 mt-2 space-y-2">
                          <a href="#code-samples" className="block text-sm text-gray-600 hover:text-deepfake-600">JavaScript</a>
                          <a href="#code-samples" className="block text-sm text-gray-600 hover:text-deepfake-600">Python</a>
                          <a href="#code-samples" className="block text-sm text-gray-600 hover:text-deepfake-600">Java</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-deepfake-50 border border-deepfake-100 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Need help?
                      </h4>
                      <p className="text-sm mt-2 text-gray-600">
                        Having trouble with the API? Contact our support team or check out detailed documentation.
                      </p>
                      <Button className="mt-4 w-full bg-deepfake-600 hover:bg-deepfake-700">
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocs;
