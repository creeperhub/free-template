
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used in order to make websites work, or work more efficiently, as well as to provide 
                information to the owners of the site.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no 
                industry standard options for disabling cookies without completely disabling the functionality and 
                features they add to this site.
              </p>
              
              <h2>3. The Cookies We Set</h2>
              <ul>
                <li><strong>Account related cookies</strong>: If you create an account with us, we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out, however in some cases they may remain afterward to remember your site preferences.</li>
                <li><strong>Login related cookies</strong>: We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</li>
                <li><strong>Site preferences cookies</strong>: In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
              </ul>
              
              <h2>4. Third Party Cookies</h2>
              <p>
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
              </p>
              <ul>
                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optim

izations our users appreciate the most.</li>
              </ul>
              
              <h2>5. More Information</h2>
              <p>
                Hopefully, that has clarified things for you. As was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              
              <h2>6. Contact Us</h2>
              <p>
                If you are still looking for more information, you can contact us at:
                <br />
                Email: privacy@creeperhub.com
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

export default CookiePolicy;
