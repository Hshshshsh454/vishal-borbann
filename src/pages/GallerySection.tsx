import React from "react";

import img1 from "../Assets/image1.jpg";
import img2 from "../Assets/image2.jpg";
import img3 from "../Assets/image3.jpg";
import img4 from "../Assets/image4.jpg";
import img5 from "../Assets/image5.jpg";
import img6 from "../Assets/image6.jpg";

const GallerySection: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      <section className="gallery">

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt="Wedding" />
            </div>
          ))}
        </div>

      </section>

      {/* CSS BELOW */}

      <style>{`

      .gallery{
        background:#000;
        padding:80px 40px;
      }

      .gallery-grid{
        column-count:4;
        column-gap:20px;
      }

      .gallery-item{
        margin-bottom:20px;
        break-inside:avoid;
        border-radius:12px;
        overflow:hidden;
      }

      .gallery-item img{
        width:100%;
        display:block;
        border-radius:12px;
        transition:transform 0.4s ease;
      }

      .gallery-item:hover img{
        transform:scale(1.05);
      }

      @media(max-width:1200px){
        .gallery-grid{
          column-count:3;
        }
      }

      @media(max-width:768px){
        .gallery-grid{
          column-count:2;
        }
      }

      @media(max-width:500px){
        .gallery-grid{
          column-count:1;
        }
      }

      `}</style>
    </>
  );
};

export default GallerySection;