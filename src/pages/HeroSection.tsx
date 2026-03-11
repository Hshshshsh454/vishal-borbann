import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="hero">

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
          <button className="primaryBtn">View Portfolio</button>
          <button className="secondaryBtn">Book a Session</button>
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

      {/* CSS BELOW */}

      <style>{`

      .hero{
        height:100vh;
        background:linear-gradient(to right,#1a1a1a,#3b2a1f);
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
        opacity:0.8;
        margin-bottom:40px;
      }

      .buttons{
        display:flex;
        gap:20px;
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
      }

      .secondaryBtn{
        background:transparent;
        border:1px solid gray;
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
        opacity:0.7;
      }

      `}</style>
    </>
  );
};

export default HeroSection;