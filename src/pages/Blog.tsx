
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import FloatingImage from "@/components/FloatingImage";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-02-20",
    category: "Technology"
  },
  {
    id: 2,
    title: "Understanding Modern UI/UX Design",
    excerpt: "A deep dive into contemporary user interface and experience design principles.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-02-18",
    category: "Design"
  },
  {
    id: 3,
    title: "The Rise of AI in Development",
    excerpt: "How artificial intelligence is transforming the development landscape.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-02-15",
    category: "AI"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <FloatingImage 
                  src={post.image} 
                  alt={post.title}
                  aspectRatio="video"
                  delay={post.id * 100}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-creeper-gray-600">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="text-sm px-3 py-1 bg-creeper-gray-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-creeper-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-creeper-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
