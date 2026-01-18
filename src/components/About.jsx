function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen pt-28 px-6 md:px-24 py-16
                 flex flex-col md:flex-row items-center justify-between gap-12
                 bg-[#14082f] text-white"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/about.png"
          alt="About illustration"
          className="w-75 md:w-105"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 max-w-xl">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-purple-400">Break_And_Enter</span>
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          We build an intelligent platform that verifies the skills mentioned in a resume or CV using real, publicly available evidence from professional and coding platforms. Instead of trusting self-written claims in resumes, the platform evaluates whether those claims are supported by the person’s actual work, activity, and behavior.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Our goal is not to label candidates as fake or genuine, but to provide a fair, transparent, and data-driven evaluation of skill claims.
        </p>
      </div>
    </section>
  );
}

export default About;

