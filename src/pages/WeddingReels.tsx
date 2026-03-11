import React from "react";
import reels from "../Assets/reels-BMDvTJBR.mp4";

const WeddingReels: React.FC = () => {
  return (
    <>
      <section className="reels">

        <div className="reels-header">
          <p className="tag">CINEMATIC FILMS</p>

          <h1 className="title">
            Wedding Reels & Highlights
          </h1>

          <p className="subtitle">
            Every love story deserves a film that makes you feel it all over again.
          </p>
        </div>

        {/* Video Box */}
        <div className="video-box">

          <video className="video" controls>
            <source src={reels} type="video/mp4" />
          </video>

          <p className="play-text">
            Play Highlight Reel
          </p>

        </div>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .reels{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        padding:100px 20px;
        text-align:center;
        color:white;
        font-family:Georgia, serif;
      }

      .tag{
        color:#ff7a1a;
        letter-spacing:4px;
        font-size:12px;
        margin-bottom:20px;
      }

      .title{
        font-size:56px;
        font-weight:500;
        margin-bottom:15px;
      }

      .subtitle{
        font-size:18px;
        color:#c9c9c9;
        margin-bottom:60px;
      }

      .video-box{
        max-width:800px;
        margin:auto;
        background:black;
        border-radius:20px;
        padding:20px;
      }

      .video{
        width:100%;
        max-height:500px;
        object-fit:contain;
        border-radius:15px;
      }

      .play-text{
        margin-top:15px;
        font-size:22px;
      }

      `}</style>
    </>
  );
};

export default WeddingReels;

