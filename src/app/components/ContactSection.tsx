// components/ContactSection.tsx
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-primary-red py-20">
      <div className="container mx-auto bg-primary-red text-center">
        <h2 className="mb-12 text-3xl font-bold">Contact</h2>
        <p className="mb-8 text-lg text-gray-700">
          Do you have any questions or would you like to request a free quote
          for a website, logo, or anything else? Feel free to contact me, and
          I'll be happy to assist you.
        </p>
        <a
          href="mailto:info@webdevamin.com"
          className="rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
