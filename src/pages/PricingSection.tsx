import React from "react";

const PricingSection: React.FC = () => {
  return (
    <>
      <section id="pricing"className="pricing">

        <p className="tag">INVESTMENT</p>
        <h1 className="title">Packages & Pricing</h1>

        <p className="subtitle">
          Every package includes full print release and access to your private online gallery.
        </p>

        <div className="pricing-cards">

          {/* Silver */}
          <div className="card">
            <div className="circle silver"></div>
            <h2>Silver</h2>
            <h3>₹49,999</h3>

            <ul>
              <li>6 Hours Coverage</li>
              <li>1 Photographer</li>
              <li>300+ Edited Photos</li>
              <li>Online Gallery</li>
              <li>Print Release</li>
            </ul>

            <button>BOOK THIS PACKAGE</button>
          </div>


          {/* Gold */}
          <div className="card popular">
            <span className="badge">MOST POPULAR</span>

            <div className="circle gold"></div>
            <h2>Gold</h2>
            <h3>₹89,999</h3>

            <ul>
              <li>10 Hours Coverage</li>
              <li>2 Photographers</li>
              <li>600+ Edited Photos</li>
              <li>Highlight Reel (3 min)</li>
              <li>Premium Album</li>
              <li>Same-Day Preview</li>
            </ul>

            <button>BOOK THIS PACKAGE</button>
          </div>


          {/* Platinum */}
          <div className="card">
            <div className="circle platinum"></div>
            <h2>Platinum</h2>
            <h3>₹1,49,999</h3>

            <ul>
              <li>Full Day Coverage</li>
              <li>3 Photographers + Videographer</li>
              <li>1000+ Edited Photos</li>
              <li>Cinematic Film (10 min)</li>
              <li>Luxury Album + Prints</li>
              <li>Engagement Session</li>
            </ul>

            <button>BOOK THIS PACKAGE</button>
          </div>

        </div>

      </section>


      {/* CSS BELOW */}

      <style>{`

      .pricing{
        background:#f5f2ed;
        text-align:center;
        padding:120px 20px;
        font-family:Georgia, serif;
      }

      .tag{
        letter-spacing:4px;
        color:#a8833a;
        font-size:14px;
      }

      .title{
        font-size:60px;
        margin:10px 0;
      }

      .subtitle{
        max-width:600px;
        margin:auto;
        color:#666;
        margin-bottom:60px;
      }

      .pricing-cards{
        display:flex;
        justify-content:center;
        gap:30px;
        flex-wrap:wrap;
      }

      .card{
        background:white;
        border-radius:20px;
        padding:40px;
        width:320px;
        box-shadow:0 10px 30px rgba(0,0,0,0.1);
        position:relative;
      }

      .popular{
        border:2px solid #b28b3f;
      }

      .badge{
        position:absolute;
        top:-12px;
        left:50%;
        transform:translateX(-50%);
        background:#b28b3f;
        color:white;
        padding:6px 14px;
        border-radius:20px;
        font-size:12px;
      }

      .circle{
        width:70px;
        height:70px;
        border-radius:50%;
        margin:0 auto 20px;
      }

      .silver{ background:#bbb; }
      .gold{ background:#d4b45f; }
      .platinum{ background:#666; }

      .card h2{
        font-size:28px;
      }

      .card h3{
        color:#b28b3f;
        font-size:30px;
        margin:10px 0 20px;
      }

      .card ul{
        list-style:none;
        padding:0;
        margin-bottom:30px;
        text-align:left;
      }

      .card ul li{
        margin-bottom:10px;
        color:#555;
      }

      .card button{
        width:100%;
        padding:14px;
        border:none;
        background:#b28b3f;
        color:white;
        border-radius:8px;
        cursor:pointer;
        font-weight:600;
      }

      .card button:hover{
        background:#c9a457;
      }

      `}</style>
    </>
  );
};

export default PricingSection;