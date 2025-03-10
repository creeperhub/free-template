
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
                Permission is granted to temporarily download one copy of the materials on CreeperHUB's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on CreeperHUB's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on CreeperHUB's website are provided "as is". CreeperHUB makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall CreeperHUB or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CreeperHUB's website, even if CreeperHUB or a CreeperHUB authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>5. Revisions and Errata</h2>
              <p>
                The materials appearing on CreeperHUB's website could include technical, typographical, or photographic errors. CreeperHUB does not warrant that any of the materials on its website are accurate, complete or current. CreeperHUB may make changes to the materials contained on its website at any time without notice.
              </p>
              
              <h2>6. Links</h2>
              <p>
                CreeperHUB has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CreeperHUB of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2>7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@creeperhub.com
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
