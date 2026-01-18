// function Contact() {
//   return (
//     <section id="contact" className="w-full min-h-screen px-6 md:px-24 py-20 bg-[#0f0529] text-white">
//      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
//       <h1>Team Break_And_Enter</h1>
      
//     </section>
//   );
// }

// export default Contact;

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 md:px-24 py-20 bg-[#0f0529] text-white flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>

      {/* Team name centered */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-400">
        Team Break_And_Enter
      </h1>

      {/* Emails */}
      <div className="space-y-3 text-center">
        <p className="text-lg hover:text-purple-400 transition">
          📧 amangithala1113@gmail.com
        </p>
        <p className="text-lg hover:text-purple-400 transition">
          📧 shashipr2809@gmail.com
        </p>
        <p className="text-lg hover:text-purple-400 transition">
          📧 locatekumarvishal@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Contact;
