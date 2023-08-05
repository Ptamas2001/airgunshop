import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

function Gallery({picture}) {
  // Létrehozunk egy üres tömböt az ImageGallery items propjának
  const items = [];

  // picture tömb elemein végigiterálunk
  picture.forEach((value, key) => {
    // A picture tömb elemeit hozzáadjuk az items tömbhöz az ImageGallery által elvárt formátumban
    items.push({
      original: value.image, // Az eredeti kép URL-je
      thumbnail: value.image, // A kis kép URL-je
    });
  });

  // Az ImageGallery komponenst visszaadjuk a megfelelő items prop értékkel
  return (
    <div>
      <ImageGallery items={items} />
    </div>
  );
}

export default Gallery;
