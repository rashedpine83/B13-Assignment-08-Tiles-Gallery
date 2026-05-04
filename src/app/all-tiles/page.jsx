import TileCard from "../../components/TileCard";
import SearchTiles from "../../components/SearchTiles";

const getTiles = async(title = "", search = "") => 
  { const res = await fetch(`https://b13-assignment-08-tiles-gallery.vercel.app/data.json?title=${title}&search=${search}`) 
    const photos = await res.json(); 
    return photos 
  }
  
const AllTiles = async ({ searchParams }) => {
  const sp = await searchParams;
 

  const photos = await getTiles(sp.title, sp.search);


 

  return (
    <div className="container mx-auto my-10">

      <h2 className="text-3xl font-bold m-5">All Tiles</h2>

      <SearchTiles />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {
          photos.map((photo) => (
            <TileCard key={photo.id} photo={photo} />
          ))
         }

      </div>

    </div>
  );
};

export default AllTiles;