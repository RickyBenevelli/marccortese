import React from "react";
import Head from "next/head";

import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import imageBackground from '@/public/images/Works.webp'
import {MdKeyboardArrowRight} from 'react-icons/md'
import WorkCard from "@/components/WorkCard";

import albums from "@/json/albums.json";
import artists from "@/json/artists.json";
import tracks from "@/json/tracks.json";
import Link from "next/link";

const AlbumPage = ({album, data}) => {

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Works</PageTitle>
            <div className="flex flex-row items-center">
                <Link href={"/works"} className="flex flex-row items-center hover:text-white/60">
                    <p className="font-light text-xl">Album</p> 
                    <MdKeyboardArrowRight className="w-8 h-8"/>
                </Link>
                <p className="font-light text-xl uppercase">
                  {album.titleAlbum}
                </p>
            </div>

            {/*  */}
            {
              data.map((track, index) => (
                <WorkCard album={album} track={track} key={index}/>

              ))
            }

        </div>
    </PageLayout>
  )
};

export default AlbumPage;

export async function getStaticPaths({locales}) {
  const albumsId = albums.map((album) => ( locales.map((locale) => ({ params: { idAlbum: album.idAlbum}, locale})))).flat();
  
  return {
    paths: albumsId,
    fallback: false,
  };
}

export async function getStaticProps({ params: {idAlbum} }) {
  const album = albums.find((album) => album.idAlbum === idAlbum);

  const tracksAlbum = tracks.filter((track) => album.tracks.includes(track.idTrack));
  // aggiungere a tracksAlbum anche l'artista
  const data = tracksAlbum.map((track) => {
    const artist = artists.filter((artist) => artist.tracks.includes(track.idTrack));
    const artistsIds = artist.map((artist) => artist.idArtist);
    return {
      ...track,
      artistsIds
    }
  })

  

  return{
    props: {
      album,
      data
    }
  }
}