import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image src={photo.url} alt={photo.title} width={350} height={200}/>
      <div className="title-container">
        <h1 className="title">{photo.title}</h1>
      </div>
    </Link>
  );
};

export default PhotoCard;
