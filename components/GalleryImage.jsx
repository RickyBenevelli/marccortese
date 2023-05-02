import React, {useState} from 'react';
import Image from 'next/image';

function GalleryImage({src, width, height }) {
    const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={`relative aspect-square cursor-pointer duration-500 ease-in-out ${isLoading ? "blur-lg grayscale scale-105" : "blur-0 scale-100 grayscale-0"}`}>
      {/* <div className="absolute inset-0 bg-gray-300" /> */}
      <Image src={`${src}`} alt="" fill style={{objectFit: 'cover'}} onLoadingComplete={() => setIsLoading(false)}/>
    </div>
  );
}

export default GalleryImage;