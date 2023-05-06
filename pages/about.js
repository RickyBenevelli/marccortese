import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import JSZip from 'jszip';
import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'
import download from "@/public/icons/Download.svg";

import imageBackground from '@/public/images/About.webp'

const photos = [
    { url: '/about/1.webp', name: 'MarcCortese.jpg' },
    { url: '/about/2.webp', name: 'MarcCortese.jpg' },
    { url: '/about/3.webp', name: 'MarcCortese.jpg' },
  ];
  
  const handleDownloadMultiple = () => {
    const link = document.createElement('a');
    link.href = '../public/about/Archivio.zip';
    link.download = 'Archivio.zip';
    link.textContent = 'Download ZIP';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const About = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `${image.url}`;
        link.click();
        setHoveredImage(null);
    };

    const downloadZip = () => {
        const link = document.createElement('a');
        link.href = '../public/about/archivio.zip';
        link.download = 'Archivio.zip';
        link.textContent = 'Download ZIP';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



  const handleDownloadMultiple = () => {
    const zip = new JSZip();
    const folder = zip.folder('immagini');

    photos.forEach((photo) => {
      fetch(photo.url)
        .then((response) => response.blob())
        .then((blob) => folder.file(photo.name, blob));
    });

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.download = 'immagini.zip';
      link.href = URL.createObjectURL(content);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

            <PageTitle>About</PageTitle>
            <div className='text-base md:text-lg py-5'>
            <p>
            Marc Cortese is a multi-instrumentalist from the United States. In 2012 he traveled to Italy in search of his roots and since then has been traveling both Italy and Europe as a drummer/front man for various touring acts. 
            <br/>
            The restrictions of the Covid era put a halt to live music but it was during this time that he adapted to the new situation by dedicating himself fully to writing, recording, and music production.
            <br/><br/>
            This process lead to ‘six songs’ his first EP (released October 14th 2022) which he entirely self produced, both singing and playing all the instruments. The project is a wide-ranging mix of soul, psychedelia, and experimental pop.
            </p>
            </div>

            <DownloadButton text="DOWNLOAD PRESSKIT" file="/Press Kit Marc Cortese - English.pdf"/>
            <div className='flex flex-col sm:flex-row'>
                {photos.map((image) => (
                    <div key={image.url} 
                        className='sm:w-1/4 py-4 sm:p-5 sm:pl-0' 
                        onMouseEnter={() => setHoveredImage(image.url)} 
                        onMouseLeave={() => setHoveredImage(null)}
                        >
                        <div 
                          className={`relative flex flex-col items-center cursor-pointer`}
                          onClick={() => handleDownload(image)}
                          >

                          <Image
                              src={image.url}
                              width={1200}
                              height={800}
                              alt={`Image ${image.name}`}
                              className={`${hoveredImage === image.url ? 'brightness-50' : ""}`}
                              />

                          {hoveredImage === image.url && (

                              <Image src={download} alt="" className="h-10 w-10 top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%] brightness-100"/>
                              
                              )}
                        </div>
                    </div>
                ))}
                
            </div>

            <button id='downloadButton' onClick={downloadZip} className="py-5 text-xl md:text-3xl flex flex-row items-center cursor-pointer uppercase italic">
                <p>DOWNLOAD PHOTOS</p>
                <Image src={download} alt="" className="h-5 w-5 m-5" />
            </button>

        </div>
    </PageLayout>
  )
}

export default About