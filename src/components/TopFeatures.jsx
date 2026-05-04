import React from 'react';
import TileCard from './TileCard';

const TopFeatures = async() => {

    const res = await fetch('https://b13-assignment-08-tiles-gallery.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 4)

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6">Top Featues</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {topPhotos.map(photo => <TileCard key={photo.id} photo={photo}></TileCard>)}
            </div>
        </div>
    );
};

export default TopFeatures;