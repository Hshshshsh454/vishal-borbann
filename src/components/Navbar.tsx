import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logo}>
        <div style={styles.brand}>Vishal Borban</div>
        <div style={styles.sub}>PHOTOGRAPHY</div>
      </div>

      {/* Menu Section */}
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Reels</li>
        <li>Gallery</li>
        <li>Pricing</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>

      {/* Instagram Icon */}
      <div style={styles.icon}>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </nav>
  );
};

export default Navbar;

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 40px",
    background: "#1a1a1a",
    color: "white",
    fontFamily: "serif",
  },

  logo: {
    display: "flex",
    flexDirection: "column",
  },

  brand: {
    fontSize: "22px",
    letterSpacing: "3px",
  },

  sub: {
    fontSize: "10px",
    letterSpacing: "3px",
    opacity: 0.7,
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
    fontSize: "14px",
    cursor: "pointer",
  },

  icon: {
    fontSize: "18px",
    cursor: "pointer",
  },
};