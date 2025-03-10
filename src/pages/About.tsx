
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import FloatingImage from "@/components/FloatingImage";

const About = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">About CreeperHUB</h1>
            
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-creeper-gray-600 mb-4 animate-fade-in">
                  CreeperHUB is a modern showcase of innovative projects that push the boundaries of digital design and development. Our mission is to create compelling digital experiences that inspire and engage.
                </p>
                <p className="text-lg text-creeper-gray-600 animate-fade-in">
                  Founded in 2022, we've been at the forefront of web technology, constantly exploring new techniques and approaches to create memorable digital products.
                </p>
              </div>
              <div className="md:w-1/2">
                <FloatingImage 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating" 
                />
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-creeper-gray-600 mb-6">
                We believe in the power of minimalist design, focusing on the essentials while eliminating the unnecessary. Our black and white aesthetic emphasizes content and functionality, creating timeless designs that stand out in a world of visual noise.
              </p>
              <p className="text-creeper-gray-600">
                Every project at CreeperHUB begins with a deep understanding of user needs and business goals. We then apply our technical expertise and creative thinking to craft solutions that exceed expectations and deliver tangible results.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">Web Development</h3>
                  <p className="text-creeper-gray-600">Creating responsive, fast-loading websites with modern frameworks and clean code.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">UI/UX Design</h3>
                  <p className="text-creeper-gray-600">Crafting intuitive interfaces and seamless user experiences that delight and engage.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">Interactive Experiences</h3>
                  <p className="text-creeper-gray-600">Building immersive digital environments with cutting-edge animation and 3D technologies.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Morgan",
                    role: "Creative Director",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    name: "Jamie Taylor",
                    role: "Lead Developer",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  },
                  {
                    name: "Riley Chen",
                    role: "UX Designer",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <FloatingImage 
                      src={member.image} 
                      alt={member.name}
                      delay={index * 200}
                      className="mb-4 w-48 h-48 mx-auto rounded-full overflow-hidden"
                    />
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-creeper-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-creeper-gray-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} CreeperHUB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
