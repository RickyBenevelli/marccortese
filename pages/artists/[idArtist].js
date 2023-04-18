import React from "react";
import Head from "next/head";

import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import imageBackground from '@/public/images/Works.webp'
import {MdKeyboardArrowRight} from 'react-icons/md'
import WorkCard from "@/components/WorkCard";
import WorksGrid from "@/components/WorksGrid";

import albums from "@/json/albums.json";
import artists from "@/json/artists.json";
import tracks from "@/json/tracks.json";
import Link from "next/link";

const ArtistPage = ({artist, artistAlbums}) => {
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Artist</PageTitle>
            <div className="flex flex-row items-center pb-5">
                <Link href={"/works"} className="flex flex-row items-center hover:text-white/60">
                    <p className="font-light text-xl">Album</p> 
                    {/* NOTE: non è corretto mettere Album qui sopra */}
                    <MdKeyboardArrowRight className="w-8 h-8"/>
                </Link>
                <p className="font-light text-xl uppercase">
                  {artist.name}
                </p>
            </div>

            <WorksGrid albums={artistAlbums}/>

        </div>
    </PageLayout>
  )
};

export default ArtistPage;

export async function getStaticPaths({locales}) {
  const idArtist = artists.map((artist) => (locales.map((locale) => ({ params: { idArtist: artist.idArtist}, locale})))).flat();

  return {
    paths: idArtist,
    fallback: false,
  };
}

export async function getStaticProps({ params: {idArtist} }) {
  const artist = artists.find((artist) => artist.idArtist === idArtist);
  const artistAlbums = albums.filter((album) => artist.albums.includes(album.idAlbum));

  return{
    props: {
        artist,
        artistAlbums
    }
  }
}