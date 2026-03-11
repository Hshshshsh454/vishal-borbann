import React from "react";

const ContactSection: React.FC = () => {
  return (
    <>
      <section className="contact">

        <h1 className="title">Let's Tell Your Story</h1>

        <p className="subtitle">
          Share your wedding vision and receive a personalized reply crafted just for you.
        </p>

        <form className="form">

          <div className="row">
            <div className="field">
              <label>YOUR NAMES</label>
              <input type="text" placeholder="Type names here..." />
            </div>

            <div className="field">
              <label>EMAIL</label>
              <input type="email" placeholder="email@example.com" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>WEDDING DATE</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>VENUE / LOCATION</label>
              <input type="text" placeholder="Where is the magic happening?" />
            </div>
          </div>

          <div className="field full">
            <label>TELL ME YOUR VISION</label>
            <textarea placeholder="Describe your dream wedding..."></textarea>
          </div>

          <button className="submit">Send Message</button>

        </form>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .contact{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        color:white;
        padding:120px 20px;
        text-align:center;
        font-family:Georgia, serif;
      }

      .title{
        font-size:60px;
        margin-bottom:10px;
      }

      .subtitle{
        color:#c9c9c9;
        font-size:18px;
        max-width:600px;
        margin:0 auto 60px;
      }

      .form{
        max-width:900px;
        margin:auto;
      }

      .row{
        display:flex;
        gap:30px;
        margin-bottom:25px;
      }

      .field{
        flex:1;
        display:flex;
        flex-direction:column;
        text-align:left;
      }

      .field label{
        color:#ff7a1a;
        font-size:13px;
        letter-spacing:2px;
        margin-bottom:8px;
      }

      .field input,
      .field textarea{
        background:#0f0f0f;
        border:1px solid rgba(255,255,255,0.15);
        border-radius:8px;
        padding:14px;
        color:white;
        font-size:16px;
      }

      .field textarea{
        height:150px;
        resize:none;
      }

      .full{
        margin-bottom:30px;
      }

      .submit{
        background:#ff7a1a;
        border:none;
        padding:14px 40px;
        font-size:16px;
        border-radius:6px;
        cursor:pointer;
        font-weight:600;
      }

      .submit:hover{
        background:#ff8f3a;
      }

      `}</style>
    </>
  );
};

export default ContactSection;