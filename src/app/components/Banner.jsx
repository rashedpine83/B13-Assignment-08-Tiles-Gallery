

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto mt-10">
        <div className="bg-[url('https://www.artistictile.com/cdn/shop/files/gallery_9.jpg?v=1690475799')] h-[80vh] bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl ">
        {/* Overlay */}
        <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 text-white flex flex-col items-center justify-cente">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl text-center">
                Transform Your Space with Stunning Tile Designs
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
               Explore a curated collection of modern, classic, and premium tiles to bring elegance and durability to every corner of your home or workspace.
            </p>

            <div className="flex gap-4">
                <Link href="/all-tiles">
                <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 p-4 rounded-full text-lg">
                    Browse Now
                </Button>
                </Link>

            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Banner;