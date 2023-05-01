import React from 'react';
import Image from 'next/image';

function GalleryImage({ src, width, height }) {
  return (
    <div className="relative ">
      {/* <div className="absolute inset-0 bg-gray-300" /> */}
      <Image src={`${src}`} alt="" width={width} height={height} />
    </div>
  );
}

export default GalleryImage;