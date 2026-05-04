
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ photo }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-5">

      <div className="flex justify-center">
        <Image
        src={photo.image}
        alt={photo.title}
        width={300}
        height={300}
        className=" w-70 h-50 object-cover group-hover:scale-110 transition duration-300"
      />
      </div>

      <div className="p-3">
        <p className="font-semibold text-lg text-gray-700">{photo.title}</p>
        <p className="text-sm text-gray-600">{photo.currency} {photo.price}</p>
      </div>
      <div>
        <Link href={`/all-tiles/${photo.id}`} className=" text-blue-600 font-bold flex justify-center">VIEW DETAILS</Link>
      </div>

    </div>
  );
};

export default TileCard;