import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal text-gray-800 mb-8 text-center">
            About Me
          </h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Who I Am
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Hey there! I'm Benson, a passionate developer who loves building innovative solutions 
                and exploring new technologies. I believe in writing clean, maintainable code and 
                creating user experiences that make a difference.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                What I Do
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                I specialize in full-stack development with a focus on modern web technologies. 
                My expertise spans across:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
                <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
                <li>Backend: Node.js, Python, PostgreSQL, MongoDB</li>
                <li>Cloud: AWS, Vercel, Docker</li>
                <li>Tools: Git, VS Code, Figma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                My Journey
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                I started my coding journey several years ago, driven by curiosity and a desire 
                to solve real-world problems through technology. Since then, I've worked on various 
                projects ranging from web applications to mobile apps, always learning and growing 
                with each new challenge.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Beyond Code
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, 
                or working on side projects. I'm always excited to connect with fellow developers 
                and collaborate on interesting projects.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}