import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <section id="services" className="services-section">

        <h1 className="title">Our Services</h1>

        <div className="cards">

          {/* Card 1 */}
          <div className="card">
            <div className="icon">❤</div>
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
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="icon">📷</div>
            <h2>Portrait & Lifestyle</h2>

            <p>
              Personal branding, family portraits aur lifestyle shoots ke liye
              creative concepts aur natural lighting.
            </p>

            <ul>
              <li>Studio / Outdoor shoot</li>
              <li>Professional retouching</li>
              <li>Social media ready images</li>
              <li>Mood-based editing</li>
            </ul>

            <button>Explore Package</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="icon">📅</div>
            <h2>Event Photography</h2>

            <p>
              Corporate events, birthday parties, product launches aur concerts —
              har moment ko professionally document karte hain.
            </p>

            <ul>
              <li>Event coverage</li>
              <li>Fast delivery</li>
              <li>High-resolution images</li>
              <li>Highlight shots</li>
            </ul>

            <button>Explore Package</button>
          </div>

        </div>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .services-section{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        padding:120px 20px;
        color:white;
        text-align:center;
        font-family:Georgia, serif;
      }

      .title{
        font-size:60px;
        margin-bottom:60px;
      }

      .cards{
        display:flex;
        gap:30px;
        justify-content:center;
        flex-wrap:wrap;
      }

      .card{
        background:#121212;
        border-radius:20px;
        padding:40px;
        width:320px;
        text-align:left;
        box-shadow:0 10px 30px rgba(0,0,0,0.4);
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
        font-size:24px;
        margin-bottom:20px;
      }

      .card h2{
        font-size:24px;
        margin-bottom:15px;
      }

      .card p{
        color:#c9c9c9;
        font-size:16px;
        margin-bottom:20px;
        line-height:1.6;
      }

      .card ul{
        list-style:none;
        padding:0;
        margin-bottom:25px;
      }

      .card ul li{
        margin-bottom:10px;
        color:#ddd;
        position:relative;
        padding-left:18px;
      }

      .card ul li::before{
        content:"✓";
        color:#ff7a1a;
        position:absolute;
        left:0;
      }

      .card button{
        width:100%;
        padding:12px;
        border:1px solid rgba(255,255,255,0.2);
        background:transparent;
        color:white;
        border-radius:8px;
        cursor:pointer;
      }

      .card button:hover{
        background:#ff7a1a;
        border-color:#ff7a1a;
      }

      `}</style>
    </>
  );
};

export default Services;