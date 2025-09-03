import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import FloatingImage from "@/components/FloatingImage";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">About .....</h1>
            
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-creeper-gray-600 mb-4 animate-fade-in">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam aut iure nisi labore laboriosam. Error, ipsa delectus quam doloribus, alias obcaecati labore provident autem iure tempora pariatur, repellendus doloremque?                </p>
                <p className="text-lg text-creeper-gray-600 animate-fade-in">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt quas, ipsum ratione culpa labore ex illo dolores dicta unde accusantium officia quaerat consectetur dolore numquam hic. Vel, enim aut?                </p>
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
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic obcaecati sequi, ut distinctio expedita excepturi? Voluptates ex corporis nostrum animi illo dolorem tempora sunt eaque, commodi minima, excepturi labore! Autem?              </p>
              <p className="text-creeper-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis ad placeat laborum, dolore cupiditate tempora magnam sunt quasi minima beatae aspernatur recusandae nesciunt! Voluptatem quo quaerat quisquam voluptatum sapiente?              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">Lorem</h3>
                  <p className="text-creeper-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">Lorem</h3>
                  <p className="text-creeper-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">Lorem</h3>
                  <p className="text-creeper-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Lorem</h2>
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
      
      <Footer />
    </div>
  );
};

export default About;
