import { useState } from "react";
import { MapPin, Mail, Phone, Home } from "lucide-react";
import HomeLogo from "./assets/Logo.png";
import Residental from "./assets/residental2.png";
import Architectural from "./assets/Architectural.png";
import Architect from "./assets/Architect.png";
import Project from "./assets/project.jpg";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Logo from './assets/mainLogo2.png'

export default function BlueLadderWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [activeProject, setActiveProject] = useState(null);

const toggleProject = (id) => {
  setActiveProject(activeProject === id ? null : id);
};


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const projects = [
    {
      id: 1,
      name: "Ekta Palace",
      tagline: "Where Elegance Meets Strength",
      description:
        "A beautifully designed residential project combining modern architecture, premium quality, and timeless comfort — delivered with excellence and trust.",
      image: Project,
    },
    {
      id: 2,
      name: "Galaxy Imperia",
      tagline: "Elevate Your Living",
      description:
        "A premium residential project designed for modern lifestyles, offering comfort, elegance, and architectural excellence in every corner.",
      image: Project2,
    },
    {
      id: 3,
      name: "Galaxy Impreria 2",
      tagline: "Style Meets Strength",
      description:
        "Experience elevated living with thoughtfully designed spaces, premium finishes, and unmatched comfort — built to suit your modern lifestyle.",
      image: Project3,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="font-sans">
      {/* Header with Navigation */}
      <header className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={HomeLogo}
          alt="Construction workers"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-30 z-10" />

        {/* Navbar */}
        <div className="relative top-0 left-0 right-0 z-20 bg-white bg-opacity-90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
             <img src={Logo} alt=""  className="w-24"/>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-800 hover:text-blue-600">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-blue-600">
                About us
              </a>
              <a href="#services" className="text-gray-800 hover:text-blue-600">
                Our Services
              </a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600">
                Contact us
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white px-4 pb-4 space-y-2">
              <a
                href="#home"
                className="block text-gray-800 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-800 hover:text-blue-600"
              >
                About us
              </a>
              <a
                href="#services"
                className="block text-gray-800 hover:text-blue-600"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="block text-gray-800 hover:text-blue-600"
              >
                Contact us
              </a>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col  justify-center h-full  text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans drop-shadow-lg">
            Building Your Vision, <br className="hidden sm:block" />
            Brick by Brick
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            Reliable. Efficient. Trusted Construction Services.
          </p>
          <button className="bg-white w-64 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Get a Free Consultation
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
            About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-gray-700">
                We are a team of dedicated construction professionals committed
                to delivering high-quality residential, commercial, and
                industrial projects with precision and trust.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-gray-700">
                Our mission is to deliver reliable, innovative, and
                cost-effective construction solutions while maintaining the
                highest standards of safety, quality, and integrity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-gray-700">
                To be recognized as a trusted name in construction by building
                lasting structures and stronger client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
            Our Services
          </h2>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-gray-50 rounded-lg overflow-hidden">
            <div className="w-full flex justify-center md:w-1/3">
              <img
                src={Residental}
                alt="Residential Building"
                className="w-96 h-96  object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Residential Construction
              </h3>
              <p className="text-gray-700">
                We specialize in building comfortable, modern, and durable homes
                tailored to your needs. From independent houses to duplexes and
                apartments — we ensure quality craftsmanship, timely delivery,
                and complete peace of mind.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 bg-gray-50 rounded-lg overflow-hidden">
            <div className="w-full flex justify-center md:w-1/3">
              <img
                src={Architect}
                alt="Architectural Design"
                className="w-96 h-96 object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Architectural & Structural Design
              </h3>
              <p className="text-gray-700">
                Our expert architects and structural engineers work together to
                create strong, innovative, and efficient designs. We blend
                creativity with technical precision to ensure each project is
                safe, sustainable, and visually appealing.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg overflow-hidden">
            <div className="w-full flex justify-center md:w-1/3">
              <img
                src={Architectural}
                alt="Commercial Building"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Commercial Projects
              </h3>
              <p className="text-gray-700">
                Whether it's office complexes, showrooms, or retail spaces, we
                deliver functional and aesthetic commercial infrastructure that
                supports your business growth. We focus on smart design, space
                optimization, and long-term durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
             <div
             key={project.id}
             className="bg-white rounded-lg overflow-hidden shadow-sm relative h-96 cursor-pointer group md:hover:scale-105 transition"
             onClick={() => toggleProject(project.id)}
           >
             <img
               src={project.image}
               alt={project.name}
               className={`w-full h-full object-cover transition-all duration-300 ${
                 activeProject === project.id ? "opacity-30" : ""
               }`}
             />
             <div
               className={`absolute inset-0 flex flex-col justify-center p-6 bg-blue-100 bg-opacity-70 transition-opacity duration-300
                 ${activeProject === project.id ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
             >
               <h3 className="text-2xl font-bold text-gray-800 mb-2">
                 {project.name}
               </h3>
               <h4 className="text-xl font-semibold text-gray-800 mb-4">
                 — {project.tagline}
               </h4>
               <p className="text-gray-800">{project.description}</p>
             </div>
           </div>
           
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Address:
              </h3>
              <div className="flex mb-4">
                <MapPin className="text-blue-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  6th Floor, Landmark building, Ramdaspeth, Nagpur, Maharashtra
                  440012
                </p>
              </div>
              <div className="flex mb-4">
                <Mail className="text-blue-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">contact@blueladderepc.com</p>
              </div>
              <div className="flex mb-4">
                <Phone className="text-blue-600 mr-2 flex-shrink-0" />
                <p className="text-gray-700">+91 7798811367</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Useful Links
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#home" className="hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-600">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center">
          <img src={Logo} alt=""  className="w-32"/>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /* <section id="projects" className="py-16 bg-gray-100">
                      <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">Our Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <img src={Project} alt="Residential Project" className="w-full h-96 object-cover" />
                          </div>
                          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <img src={Project2} alt="Commercial Project" className="w-full h-96 object-cover" />
                          </div>
                          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <img src={Project3} alt="Industrial Project" className="w-full h-96 object-cover" />
                          </div>
                        </div>
                      </div>
                    </section> */
}
