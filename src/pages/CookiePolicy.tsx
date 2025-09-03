
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolore repellendus est error nulla odit! Rem necessitatibus vel nostrum earum impedit sit similique recusandae incidunt dolore. Tempore delectus obcaecati sunt!
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores dicta pariatur possimus repellat similique harum in delectus. Minima debitis nesciunt blanditiis quis dolorum cupiditate, officiis modi possimus repellat alias.
              </p>
              
              <h2>3. The Cookies We Set</h2>
              <ul>
                <li><strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!</li>
                <li><strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!</li>
                <li><strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!</li>
              </ul>
              
              <h2>4. Third Party Cookies</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!.
              </p>
              <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ratione placeat nam rerum, quos vitae odio tempore libero consequatur quas amet dicta. Recusandae officiis optio esse deserunt iusto ea consectetur!.
</li>
              </ul>
              
              <h2>5. More Information</h2>
              <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus, at recusandae rerum ipsam nulla in dolor eaque fugit dolores sed magni omnis provident dignissimos officiis eius neque ipsa optio.              </p>
              
              <h2>6. Contact Us</h2>
              <p>
                If you are still looking for more information, you can contact us at:
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

export default CookiePolicy;
