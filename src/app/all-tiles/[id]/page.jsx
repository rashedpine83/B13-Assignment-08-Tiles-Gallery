import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesDetails = async({params}) => {
    const {id} = await params;

    const res = await fetch('https://b13-assignment-08-tiles-gallery.vercel.app/data.json');
    const photos = await res.json();

    const detail = photos.find(item => item.id === id)
    return (
        <div className='container mx-auto my-10 flex justify-center gap-5 items-center'>
            <div>
                <Image src={detail.image} alt={detail.title} width={500} height={400}></Image>
            </div>
            <div className=' space-y-5'>
                <p className=' font-bold text-3xl text-[#6D214F]'>{detail.title}</p>
                <p className='text-gray-700'>{detail.description}</p>
                <p><span className='font-bold text-xl'>Sizes:</span> {detail.dimensions}</p>
                <p><span className='font-bold text-xl'>Category:</span> {detail.category}</p>
                <p><span className='font-bold text-xl'>Material: </span>{detail.material}</p>
                <p className="text-sm text-gray-600">{detail.currency} {detail.price}</p>
                <Link href="/contract-us"><Button className="bg-[#6D214F]">Contract Us</Button></Link>
            </div>
        </div>
    );
};

export default TilesDetails;