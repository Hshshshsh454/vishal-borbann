import React from "react";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {

  const cardAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <section className="services">

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <div className="service-grid">

          {/* Card 1 */}
          <motion.div
            className="service-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
          >
            <div className="icon">♡</div>

            <h2>Wedding Photography</h2>

            <p>
              Candid moments, emotional rituals aur grand celebrations —
              hum har special memory ko naturally capture karte hain.
            </p>

            <ul>
              <li>Pre-wedding shoot</li>
              <li>Full wedding day coverage</li>
              <li>Cinematic couple portraits</li>
              <li>Professional editing</li>
            </ul>

            <button>Explore Package</button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="service-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="icon">📷</div>

            <h2>Portrait & Lifestyle</h2>

            <p>
              Personal branding, family portraits aur lifestyle shoots ke
              liye creative concepts aur natural lighting.
            </p>

            <ul>
              <li>Studio / Outdoor shoot</li>
              <li>Professional retouching</li>
              <li>Social media ready images</li>
              <li>Mood-based editing</li>
            </ul>

            <button>Explore Package</button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="service-card"
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="icon">📅</div>

            <h2>Event Photography</h2>

            <p>
              Corporate events, birthday parties, product launches aur
              concerts — har moment ko professionally document karte hain.
            </p>

            <ul>
              <li>Event coverage</li>
              <li>Fast delivery</li>
              <li>High-resolution images</li>
              <li>Highlight shots</li>
            </ul>

            <button>Explore Package</button>
          </motion.div>

        </div>

      </section>

      {/* CSS SAME AS YOUR ORIGINAL */}

      <style>{`

      .services{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        padding:120px 40px;
        text-align:center;
        color:white;
        font-family:Georgia, serif;
      }

      .title{
        font-size:60px;
        margin-bottom:70px;
      }

      .service-grid{
        display:flex;
        justify-content:center;
        gap:30px;
        flex-wrap:wrap;
      }

      .service-card{
        background:linear-gradient(180deg,#202020,#0f172a);
        padding:40px;
        border-radius:20px;
        width:340px;
        text-align:left;
        box-shadow:0 20px 40px rgba(0,0,0,0.5);
      }

      .icon{
        width:60px;
        height:60px;
        border-radius:50%;
        background:white;
        color:black;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:26px;
        margin-bottom:20px;
      }

      .service-card h2{
        font-size:24px;
        margin-bottom:15px;
      }

      .service-card p{
        color:#c9c9c9;
        line-height:1.6;
        margin-bottom:20px;
      }

      .service-card ul{
        list-style:none;
        padding:0;
        margin-bottom:30px;
      }

      .service-card ul li{
        margin-bottom:10px;
        padding-left:18px;
        position:relative;
        color:#ddd;
      }

      .service-card ul li::before{
        content:"✓";
        color:#ff7a1a;
        position:absolute;
        left:0;
      }

      .service-card button{
        width:100%;
        padding:12px;
        background:transparent;
        border:1px solid rgba(255,255,255,0.2);
        border-radius:8px;
        color:white;
        cursor:pointer;
        font-size:15px;
      }

      .service-card button:hover{
        background:#ff7a1a;
        border-color:#ff7a1a;
      }

      `}</style>
    </>
  );
};

export default ServicesSection;