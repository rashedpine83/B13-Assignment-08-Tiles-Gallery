import TileCard from "../components/TileCard";


const AllTiles = async() => {

    const res = await fetch('https://b13-assignment-08-tiles-gallery.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6"> All Tiles</h2>
            <div className="grid grid-cols-4 gap-6">
                {photos.map((photo) => <TileCard key={photo.id} photo={photo}></TileCard>)}
            </div>
            
        </div>
    );
};

export default AllTiles;