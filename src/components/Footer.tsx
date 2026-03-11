import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={styles.page}>
      <footer style={styles.footer}>

        <div style={styles.container}>

          {/* Column 1 */}
          <div>
            <h3 style={styles.heading}>Get in Touch</h3>
            <p>T: 80851 74960</p>
            <p>E: vishalborbanphotography@gmail.com</p>
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
              <li>Home</li>
              <li>Reels</li>
              <li>Gallery</li>
              <li>Pricing</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    background: "#f3f4f6",
    fontFamily: "Arial, Helvetica, sans-serif"
  },

  footer: {
    background: "#f3f4f6",
    color: "#374151",
    padding: "60px 0"
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "50px",
    padding: "0 40px"
  },

  heading: {
    fontSize: "18px",
    marginBottom: "15px"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  privacy: {
    marginTop: "15px"
  },

  footerBottom: {
    borderTop: "1px solid #ddd",
    marginTop: "40px",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#6b7280"
  }

};