import React from 'react';
import Image from 'next/image';

function GalleryImage({src, width, height }) {
  return (
    <div className="relative aspect-square cursor-pointer">
      {/* <div className="absolute inset-0 bg-gray-300" /> */}
      <Image src={`${src}`} alt="" fill style={{objectFit: 'cover'}}/>
    </div>
  );
}

export default GalleryImage;