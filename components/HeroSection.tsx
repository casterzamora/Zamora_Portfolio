// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-8">
      {/* Avatar: replace `public/me.jpg` with your photo file */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent">
        <img
          src="/me.jpg"
          alt="Caster Zamora"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Statement */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Caster Zamora
        </h2>
        
        {/* Choose your hero statement and replace the text below */}
        <p className="text-2xl md:text-3xl text-accent font-semibold">
          Developer on a mission to build better software every day—constantly learning, shipping, and improving.
        </p>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          I combine creative problem-solving with technical expertise to craft web experiences that matter. 
          Welcome to my journey of growth and innovation.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center pt-8">
        <a
          href="#projects"
          className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
