
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Download, Upload, Plus, Trash2, ExternalLink, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DashboardPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1500);
  };
  
  const handleUploadCV = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "CV uploaded",
      description: "Your CV has been successfully uploaded.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio content and settings</p>
          </div>
        </section>
        
        <section className="container px-4 py-8">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8 grid grid-cols-1 sm:grid-cols-4 gap-2">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your profile information that will be displayed on your portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
                          <img 
                            src="/placeholder.svg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Change Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" defaultValue="Senior Web Developer" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+1 (123) 456-7890" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="San Francisco, CA" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://yourportfolio.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        rows={5}
                        defaultValue="I'm a passionate web developer with over 5 years of experience building modern web applications."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Social Links</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex gap-2">
                          <Input placeholder="GitHub" defaultValue="github.com/johndoe" />
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="LinkedIn" defaultValue="linkedin.com/in/johndoe" />
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Twitter" defaultValue="twitter.com/johndoe" />
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Dribbble" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Link
                      </Button>
                    </div>
                    
                    <Button type="submit" disabled={isLoading}>
                      <Save className="h-4 w-4 mr-2" />
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Projects</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Project
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3].map((project) => (
                  <Card key={project} className="overflow-hidden">
                    <div className="h-40 bg-muted relative">
                      <img 
                        src="/placeholder.svg" 
                        alt="Project preview" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Project {project}</CardTitle>
                      <CardDescription>
                        A brief description of this project and what it does.
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">Edit Project</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Resume Tab */}
            <TabsContent value="resume">
              <Card>
                <CardHeader>
                  <CardTitle>Resume / CV</CardTitle>
                  <CardDescription>
                    Upload and manage your resume or CV that visitors can download from your portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-md p-4 bg-muted">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-12 flex items-center justify-center bg-background rounded border">
                          <span className="text-xs font-medium">PDF</span>
                        </div>
                        <div>
                          <p className="font-medium">John_Doe_Resume.pdf</p>
                          <p className="text-xs text-muted-foreground">Uploaded on May 15, 2023 • 1.2 MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Upload New Resume</h3>
                    <form onSubmit={handleUploadCV}>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm font-medium mb-1">Drag and drop your file here</p>
                        <p className="text-xs text-muted-foreground mb-4">Supports PDF, DOCX up to 5MB</p>
                        <Button type="button" variant="outline" size="sm">Browse Files</Button>
                      </div>
                      <Button className="mt-4">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Resume
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Password</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button>Update Password</Button>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="font-medium text-destructive">Danger Zone</h3>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
