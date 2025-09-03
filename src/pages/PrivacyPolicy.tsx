
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam id veritatis eveniet! Ullam totam porro quam illum, sit impedit ipsum accusantium fugit quis animi repellendus in enim ex quos.
              </p>
              
              <h2>2. Data We Collect</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad tempora nesciunt ipsam provident soluta impedit repellat quas quasi nemo doloremque perferendis autem cupiditate fugit officiis culpa, illum consectetur aliquid.:
              </p>
              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              </ul>
              
              <h2>3. How We Use Your Data</h2>
              <p>
                WLorem ipsum dolor sit, amet consectetur adipisicing elit.:
              </p>
              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nobis dolor doloremque quae voluptatem, dolorum quisquam tenetur eos nostrum odio iste officiis quos necessitatibus, repudiandae perferendis vitae tempore sed corporis.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet sapiente mollitia, doloribus voluptatum doloremque minima minus soluta assumenda perspiciatis perferendis earum, expedita dolores? Maxime ipsa magni commodi fugiat quo.
              </p>
              
              <h2>6. Your Legal Rights</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum dignissimos autem enim facere ipsa tempore sequi provident ducimus rerum aperiam tenetur exercitationem a doloribus, culpa in, soluta distinctio minus!
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <br />
                Email: privacy@something.com
                <br />
                Address: 123 Design Street, Digital City, DC 10101
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
