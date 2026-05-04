import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://b13-assignment-08-tiles-gallery.vercel.app/data.json');
  const photos = await res.json();

  const detail = photos.find(item => item.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex flex-col md:flex-row gap-8 items-center">

        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-xl">
            <Image
              src={detail?.image}
              alt={detail?.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

       
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          
          <p className="font-bold text-2xl sm:text-3xl text-[#6D214F]">
            {detail?.title}
          </p>

          <p className="text-gray-700 text-sm sm:text-base">
            {detail?.description}
          </p>

          <p><span className="font-bold text-lg">Sizes:</span> {detail?.dimensions}</p>
          <p><span className="font-bold text-lg">Category:</span> {detail?.category}</p>
          <p><span className="font-bold text-lg">Material:</span> {detail?.material}</p>

          <p className="text-base text-gray-600">
            {detail?.currency} {detail?.price}
          </p>

          <div>
            <Link href="/contact-us">
              <Button className="bg-[#6D214F] w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TilesDetails;