import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Fresher, Looking for opportunities to contribute to 🌏 and grow!
            </h3>

            <p className="text-muted-foreground">
            🌟 Hi, I’m Deepa 👩‍💻 — an Information Science Engineer 🎓 who loves blending logic with creativity. Whether it’s  building websites , analyzing behavior using AI, building predictive models, or deploying scalable apps on the cloud, I enjoy turning ideas into impactful solutions. Beyond code, I believe in teamwork, clear communication, and building technology that truly makes a difference.
            </p>

           

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="./C.V.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

         
          
        </div>
      </div>
    </section>
  );
};
