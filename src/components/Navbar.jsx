import { useState, useEffect } from 'react';
import './styling/Navbar.css'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'howtobuy', 'tokeninfo'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">
            <span className="logo-icon">🚀</span>
            BORIS
          </h1>
          
          <div className="nav-links">
            <a 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={() => handleLinkClick('hero')}
            >
              Home
            </a>
            <a 
              className={activeSection === 'features' ? 'active' : ''}
              onClick={() => handleLinkClick('features')}
            >
              Features
            </a>
            <a 
              className={activeSection === 'howtobuy' ? 'active' : ''}
              onClick={() => handleLinkClick('howtobuy')}
            >
              How to Buy
            </a>
            <a 
              className={activeSection === 'tokeninfo' ? 'active' : ''}
              onClick={() => handleLinkClick('tokeninfo')}
            >
              Token Info
            </a>
          </div>
          
          <div className="social-links">
           <a 
  href="https://t.me/Portal_Boris" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <span className="social-icon">📢</span>
</a>

<a 
  href="https://x.com/boristhemammoth?s=21" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <span className="social-icon">🐦</span>
</a>

            <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">💧</span>
            </a>
          </div>
          
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMobileMenu}>
          ✕
        </button>
        <div className="mobile-nav-links">
          <a 
            className={activeSection === 'hero' ? 'active' : ''}
            onClick={() => handleLinkClick('hero')}
          >
            Home
          </a>
          <a 
            className={activeSection === 'features' ? 'active' : ''}
            onClick={() => handleLinkClick('features')}
          >
            Features
          </a>
          <a 
            className={activeSection === 'howtobuy' ? 'active' : ''}
            onClick={() => handleLinkClick('howtobuy')}
          >
            How to Buy
          </a>
          <a 
            className={activeSection === 'tokeninfo' ? 'active' : ''}
            onClick={() => handleLinkClick('tokeninfo')}
          >
            Token Info
          </a>
           
        </div>
        
      </div>
    </>
  );
}

export default Navbar;