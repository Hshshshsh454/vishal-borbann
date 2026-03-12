import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <div id="home" className="hero">

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="heroContent">

          {/* Top Tagline */}
          <div className="tagline">
            #1 PREMIUM PHOTOGRAPHY STUDIO IN INDIA
          </div>

          {/* Main Heading */}
          <h1 className="heading">
            Master The Art of <br />
            <span className="orange">Photography</span> <br />
            & Storytelling
          </h1>

          {/* Subtitle */}
          <p className="subtitle">
            Capturing the stolen glances and emotional highlights of your
            unique love story with a cinematic touch.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <a href="#gallery">
              <button className="primaryBtn">View Portfolio</button>
            </a>

            <a href="#contact">
              <button className="secondaryBtn">Book a Session</button>
            </a>
          </div>

        </div>

        {/* Bottom Services */}
        <div className="services">
          <span>WEDDING PHOTOGRAPHY</span>
          <span>•</span>
          <span>PRE-WEDDING SHOOTS</span>
          <span>•</span>
          <span>PORTRAIT SESSIONS</span>
          <span>•</span>
          <span>CINEMATIC REELS</span>
        </div>

      </div>

      {/* CSS */}

      <style>{`

      .hero{
        height:100vh;
        background-image:url("https://t4.ftcdn.net/jpg/15/63/12/77/240_F_1563127753_QJSGs0s0RLIMTvJ4vmMuQJu8Jk7qzPK3.jpg");
        background-size:cover;
        background-position:center;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:20px;
        font-family:Georgia, serif;
        position:relative;
      }

      /* Dark overlay for readability */
      .overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.55);
        z-index:1;
      }

      .heroContent{
        position:relative;
        z-index:2;
      }

      .tagline{
        color:#ff7a1a;
        letter-spacing:5px;
        font-size:14px;
        margin-bottom:20px;
      }

      .heading{
        font-size:72px;
        font-weight:500;
        line-height:1.1;
        margin-bottom:20px;
      }

      .orange{
        color:#ff7a1a;
        font-style:italic;
      }

      .subtitle{
        max-width:600px;
        font-size:18px;
        opacity:0.9;
        margin-bottom:40px;
      }

      .buttons{
        display:flex;
        gap:20px;
        justify-content:center;
        margin-bottom:60px;
      }

      .primaryBtn{
        background:#ff7a1a;
        border:none;
        padding:14px 28px;
        font-size:16px;
        border-radius:6px;
        cursor:pointer;
        color:black;
        font-weight:600;
      }

      .secondaryBtn{
        background:transparent;
        border:1px solid white;
        padding:14px 28px;
        font-size:16px;
        border-radius:6px;
        cursor:pointer;
        color:white;
      }

      .services{
        position:absolute;
        bottom:30px;
        display:flex;
        gap:15px;
        font-size:12px;
        letter-spacing:2px;
        opacity:0.8;
        z-index:2;
      }

      /* Responsive */

      @media(max-width:768px){

        .heading{
          font-size:40px;
        }

        .subtitle{
          font-size:16px;
        }

        .buttons{
          flex-direction:column;
        }

      }

      `}</style>
    </>
  );
};

export default HeroSection;