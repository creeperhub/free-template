
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the CreeperHUB website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2>2. Use License</h2>
              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit quas illo laudantium libero distinctio dolore quae? Debitis corrupti modi doloribus, unde nemo voluptatem adipisci pariatur rerum dicta sunt iure.              </p>
              <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit;</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit;</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit;</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit;</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit;</li>
              </ul>
              
              <h2>3. Disclaimer</h2>
              <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ex voluptatem voluptate facilis dignissimos aliquam, tempora, quas, rem voluptatibus laborum quaerat dolorum tempore facere neque? Ipsum quisquam quis cupiditate obcaecati.              </p>
              
              <h2>4. Limitations</h2>
              <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum expedita consequatur aspernatur, quae hic debitis ipsam quibusdam deleniti ipsum dolor eum magni soluta ab! Minus doloremque nisi alias quos ullam?              </p>
              
              <h2>5. Revisions and Errata</h2>
              <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti ea neque laborum eaque quae facilis accusantium eius fuga earum sit, mollitia veniam sequi quisquam quod dicta odio libero quos.              </p>
              
              <h2>6. Links</h2>
              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi pariatur architecto accusamus veniam eos explicabo aspernatur, impedit consequuntur reiciendis numquam, in cupiditate aliquid voluptas ipsa consequatur ex laboriosam beatae.              </p>
              
              <h2>7. Governing Law</h2>
              <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sit beatae voluptatem maiores quia commodi voluptas perspiciatis explicabo illo nulla, architecto aut ab tempora. Iste inventore earum eaque eligendi accusantium.              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@something.com
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

export default TermsOfService;
