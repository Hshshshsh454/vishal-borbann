import React from "react";

const WhyChooseMe: React.FC = () => {
  return (
    <>
      <section className="why">

        <h1 className="title">Why Choose Me?</h1>

        <div className="cards">

          {/* Card 1 */}
          <div className="card">
            <div className="icon">📷</div>

            <h2>Creative Shoots</h2>

            <p>
              Har photoshoot unique hota hai. Hum lighting,
              angles aur creativity se har moment ko cinematic
              bana dete hain.
            </p>
          </div>


          {/* Card 2 */}
          <div className="card">
            <div className="icon">💎</div>

            <h2>Wedding Photography</h2>

            <p>
              Shaadi sirf event nahi hoti — ek emotion hoti hai.
              Hum candid moments aur real smiles capture karte hain.
            </p>
          </div>


          {/* Card 3 */}
          <div className="card">
            <div className="icon">✨</div>

            <h2>Professional Editing</h2>

            <p>
              Natural colors, soft tones aur premium retouching
              ke saath aapki photos ko timeless look dete hain.
            </p>
          </div>

        </div>

      </section>


      {/* CSS BELOW */}

      <style>{`

      .why{
        background:linear-gradient(to right,#020617,#1e293b,#4b2e22);
        padding:120px 40px;
        text-align:center;
        color:white;
        font-family:Georgia, serif;
      }

      .title{
        font-size:60px;
        margin-bottom:70px;
      }

      .cards{
        display:flex;
        justify-content:center;
        gap:40px;
        flex-wrap:wrap;
      }

      .card{
        background:linear-gradient(180deg,#1e293b,#111827);
        padding:40px;
        width:340px;
        border-radius:20px;
        box-shadow:0 20px 40px rgba(0,0,0,0.5);
      }

      .icon{
        width:70px;
        height:70px;
        border-radius:50%;
        background:white;
        color:black;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:28px;
        margin:0 auto 20px;
      }

      .card h2{
        font-size:24px;
        margin-bottom:15px;
      }

      .card p{
        color:#d1d5db;
        line-height:1.6;
      }

      `}</style>
    </>
  );
};

export default WhyChooseMe;