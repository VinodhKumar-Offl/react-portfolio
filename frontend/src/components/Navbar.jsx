import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPos >= offsetTop) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-cyan-600/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center select-none">
        <span className="text-cyan-400 text-xl font-extrabold tracking-wide font-sans">
          Vinodh Kumar
        </span>
        <div className="flex gap-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                relative
                text-white
                font-medium
                tracking-wide
                transition-colors duration-300
                hover:text-cyan-400
                cursor-pointer
                py-1
              `}
            >
              <span
                className={`relative z-10 ${
                  activeSection === id ? "text-cyan-400 font-semibold" : ""
                }`}
              >
                {label}
              </span>
              {/* underline animation */}
              <span
                className={`
                  absolute bottom-0 left-0 right-0 h-0.5
                  bg-cyan-400
                  rounded
                  scale-x-0
                  origin-left
                  transition-transform duration-300
                  ${activeSection === id ? "scale-x-100" : ""}
                `}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
