import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={styles.page}>
      <footer style={styles.footer}>

        <div style={styles.container}>

          {/* Column 1 */}
          <div>
            <h3 style={styles.heading}>Get in Touch</h3>

            <p>
              T:
              <a
                href="https://wa.me/918085174960"
                style={styles.link}
                target="_blank"
              >
                80851 74960
              </a>
            </p>

            <p>
              E:
              <a
                href="mailto:vishalborbanphotography@gmail.com"
                style={styles.link}
              >
                vishalborbanphotography@gmail.com
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 style={styles.heading}>Useful Links</h3>

            <ul style={styles.list}>
              <li>Liverpool Wedding Photographer</li>
              <li>Alternative Wedding Photographer</li>
              <li>Middleton Lodge</li>
              <li>Trafalgar Warehouse</li>
              <li style={styles.privacy}>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 style={styles.heading}>Site Navigation</h3>

            <ul style={styles.list}>

              <li><a href="#home" style={styles.link}>Home</a></li>
              <li><a href="#reels" style={styles.link}>Reels</a></li>
              <li><a href="#gallery" style={styles.link}>Gallery</a></li>
              <li><a href="#pricing" style={styles.link}>Pricing</a></li>
              <li><a href="#services" style={styles.link}>Services</a></li>
              <li><a href="#about" style={styles.link}>About</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
              <li><a href="#faq" style={styles.link}>FAQ</a></li>

            </ul>
          </div>

        </div>

        <div style={styles.footerBottom}>
          © 2026 Vishal Borban Photography. All Rights Reserved.
        </div>

      </footer>
    </div>
  );
};

export default Footer;



/* CSS Properties Below */

const styles: { [key: string]: React.CSSProperties } = {

  page: {
    background: "#0f172a",
    fontFamily: "Georgia, serif"
  },

  footer: {
    background: "#1a0f0a",
    color: "#e5e5e5",
    padding: "60px 20px"
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "40px"
  },

  heading: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#ff7a1a"
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2"
  },

  link: {
    textDecoration: "none",
    color: "#e5e5e5"
  },

  privacy: {
    marginTop: "10px"
  },

  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.15)",
    marginTop: "40px",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#aaa"
  }

};