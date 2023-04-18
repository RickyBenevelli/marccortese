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

const AlbumPage = ({album, artist, tracksAlbum}) => {

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Works</PageTitle>
            <div className="flex flex-row items-center">
                <Link href={"/works"} className="flex flex-row items-center hover:text-white/60">
                    <p className="font-light text-xl">Album</p> 
                    {/* NOTE: non è corretto mettere Album qui sopra */}
                    <MdKeyboardArrowRight className="w-8 h-8"/>
                </Link>
                <p className="font-light text-xl uppercase">
                  {album.titleAlbum}
                </p>
            </div>

            {/*  */}
            {
              tracksAlbum.map((track, index) => (
                <WorkCard album={album} artist={artist} track={track} key={index}/>

              ))
            }

        </div>
    </PageLayout>
  )
};

export default AlbumPage;

export async function getStaticPaths() {
  
    const albumsId = albums.map((album) => ({ params: { idAlbum: album.idAlbum}}));

  return {
    paths: albumsId,
    fallback: false,
  };
}

export async function getStaticProps({ params: {idAlbum} }) {
  const album = albums.find((album) => album.idAlbum === idAlbum);
  const artist = artists.filter((artist) => artist.albums.includes(idAlbum)); 
  const tracksAlbum = tracks.filter((track) => album.tracks.includes(track.idTrack));

  return{
    props: {
      album,
      artist,
      tracksAlbum
    }
  }
}