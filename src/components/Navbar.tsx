import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          ...styles.navbar,
          background: scrolled ? "#1a1a1a" : "transparent",
          boxShadow: scrolled ? "0 5px 20px rgba(0,0,0,0.4)" : "none"
        }}
      >

        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.brand}>Vishal Borban</div>
          <div style={styles.sub}>PHOTOGRAPHY</div>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

        {/* Menu */}
        <ul
          style={{
            ...styles.menu,
            ...(open ? styles.menuOpen : {})
          }}
        >
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#reels" style={styles.link}>Reels</a></li>
          <li><a href="#gallery" style={styles.link}>Gallery</a></li>
          <li><a href="#pricing" style={styles.link}>Pricing</a></li>
          <li><a href="#services" style={styles.link}>Services</a></li>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
          <li><a href="#faq" style={styles.link}>FAQ</a></li>
        </ul>

        {/* Instagram */}
        <div style={styles.icon}>
          <a
            href="https://www.instagram.com/vishal_borban_photography?igsh=MTJxdGYwaXdtbjRvMQ=="
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

      </nav>

      {/* Responsive CSS */}
      <style>{`

      @media (max-width:768px){

        .hamburger{
          display:block;
        }

        nav ul{
          display:none;
        }

        nav ul li{
          padding:10px 0;
        }

      }

      `}</style>
    </>
  );
};

export default Navbar;



const styles: { [key: string]: React.CSSProperties } = {

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 40px",
    color: "white",
    transition: "all 0.3s ease",
    zIndex: 1000
  },

  logo: {
    display: "flex",
    flexDirection: "column"
  },

  brand: {
    fontSize: "22px",
    letterSpacing: "3px"
  },

  sub: {
    fontSize: "10px",
    letterSpacing: "3px",
    opacity: 0.7
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
    fontSize: "14px"
  },

  menuOpen: {
    position: "absolute",
    top: "70px",
    left: 0,
    right: 0,
    background: "#1a1a1a",
    flexDirection: "column",
    padding: "20px",
    display: "flex",
    gap: "15px"
  },

  link: {
    textDecoration: "none",
    color: "white"
  },

  icon: {
    fontSize: "18px"
  },

  hamburger: {
    display: "none",
    fontSize: "26px",
    cursor: "pointer"
  }

};