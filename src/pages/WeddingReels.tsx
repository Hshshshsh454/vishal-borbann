import React from "react";
import reels from "../Assets/reels-BMDvTJBR.mp4";

const WeddingReels: React.FC = () => {
  return (
    <>
      <section id="reels"className="reels">

        <div className="reels-header">
          <p className="tag">CINEMATIC FILMS</p>

          <h1 className="title">
            Wedding Reels & Highlights
          </h1>

          <p className="subtitle">
            Every love story deserves a film that makes you feel it all over again.
          </p>
        </div>

        <div className="video-box">
          <video
            className="video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={reels} type="video/mp4" />
          </video>

          <p className="play-text">Highlight Reel</p>
        </div>

      </section>

      <style>{`

      .reels{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        padding:100px 20px;
        text-align:center;
        color:white;
        font-family:Georgia, serif;
      }

      .reels-header{
        max-width:800px;
        margin:auto;
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
        max-width:900px;
        margin:auto;
        background:black;
        border-radius:20px;
        padding:20px;
      }

      .video{
        width:100%;
        height:auto;
        max-height:500px;
        object-fit:cover;
        border-radius:15px;
      }

      .play-text{
        margin-top:15px;
        font-size:22px;
      }

      /* Tablet */

      @media (max-width: 992px){

        .title{
          font-size:42px;
        }

        .subtitle{
          font-size:16px;
        }

        .video-box{
          padding:15px;
        }

      }

      /* Mobile */

      @media (max-width: 600px){

        .reels{
          padding:60px 15px;
        }

        .title{
          font-size:30px;
        }

        .subtitle{
          font-size:15px;
          margin-bottom:40px;
        }

        .video-box{
          border-radius:12px;
          padding:10px;
        }

        .video{
          border-radius:10px;
        }

        .play-text{
          font-size:16px;
        }

      }

      `}</style>
    </>
  );
};

export default WeddingReels;