import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="about">

        <h1 className="title">Hello, I’m Vishal</h1>

        <p className="text">
          I've spent over a decade chasing the light at weddings across India — the stolen
          glances, the happy tears, the moments between moments that tell the real story of a day.
        </p>

        <p className="text">
          My approach is quiet and intuitive. I blend into your day so you can live it fully,
          while I capture everything you'll want to relive forever. Every wedding I photograph
          is a privilege I take deeply to heart.
        </p>

        {/* Stats Cards */}
        <div className="stats">

          <div className="card">
            <h2>20+</h2>
            <p>WEDDINGS</p>
          </div>

          <div className="card">
            <h2>2+</h2>
            <p>YEARS</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>STATES</p>
          </div>

        </div>

        <button className="btn">Tell me your story!</button>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .about{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        color:white;
        text-align:center;
        padding:120px 20px;
        font-family:Georgia, serif;
      }

      .title{
        font-size:70px;
        margin-bottom:30px;
      }

      .text{
        max-width:800px;
        margin:0 auto 20px;
        font-size:18px;
        color:#c9c9c9;
        line-height:1.7;
      }

      .stats{
        display:flex;
        justify-content:center;
        gap:30px;
        margin-top:60px;
        flex-wrap:wrap;
      }

      .card{
        background:#120c08;
        padding:40px 60px;
        border-radius:18px;
        text-align:center;
        min-width:200px;
      }

      .card h2{
        color:#ff7a1a;
        font-size:40px;
        margin-bottom:10px;
      }

      .card p{
        letter-spacing:2px;
        color:#9f9f9f;
        font-size:13px;
      }

      .btn{
        margin-top:60px;
        background:#ff7a1a;
        border:none;
        padding:14px 35px;
        font-size:16px;
        border-radius:6px;
        cursor:pointer;
        font-weight:600;
      }

      .btn:hover{
        background:#ff8f3a;
      }

      `}</style>
    </>
  );
};

export default About;