import React, { useState } from "react";

const faqData = [
  {
    question: "What is the booking process?",
    answer:
      "To book a session, simply contact us through the website or phone. We confirm availability and secure your date with a deposit.",
  },
  {
    question: "How far in advance do you book?",
    answer:
      "Most couples book 6-12 months in advance, especially during peak wedding season.",
  },
  {
    question: "How many images do we receive?",
    answer:
      "You typically receive 400–800 fully edited high-resolution images depending on the event.",
  },
  {
    question: "I hate having my picture taken...!",
    answer:
      "Don't worry! We guide you naturally and capture authentic moments so you feel relaxed.",
  },
  {
    question: "How long does it take to receive my images?",
    answer:
      "Delivery usually takes 3–4 weeks after your wedding day.",
  },
];

const FAQSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="faq">

        <h1 className="faq-title">Got Questions?</h1>

        <p className="faq-subtitle">
          Common questions I get asked. If you don't find your answer here,
          feel free to get in touch!
        </p>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">

              <div
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="icon">
                  {active === index ? "−" : "+"}
                </span>
              </div>

              {active === index && (
                <p className="faq-answer">{item.answer}</p>
              )}

            </div>
          ))}
        </div>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .faq{
        background:linear-gradient(to right,#1a0f0a,#2c1a11);
        color:white;
        padding:120px 20px;
        text-align:center;
        font-family:Georgia, serif;
      }

      .faq-title{
        font-size:60px;
        margin-bottom:10px;
      }

      .faq-subtitle{
        font-size:20px;
        color:#c9c9c9;
        max-width:700px;
        margin:0 auto 70px;
      }

      .faq-container{
        max-width:900px;
        margin:auto;
      }

      .faq-item{
        border-bottom:1px solid rgba(255,255,255,0.15);
        padding:25px 0;
      }

      .faq-question{
        display:flex;
        justify-content:space-between;
        align-items:center;
        cursor:pointer;
        font-size:20px;
      }

      .icon{
        border:1px solid #ff7a1a;
        color:#ff7a1a;
        border-radius:50%;
        width:32px;
        height:32px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:20px;
      }

      .faq-answer{
        margin-top:15px;
        color:#d3d3d3;
        text-align:left;
        line-height:1.6;
      }

      `}</style>
    </>
  );
};

export default FAQSection;