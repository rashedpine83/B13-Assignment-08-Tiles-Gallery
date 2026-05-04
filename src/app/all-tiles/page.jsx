import TileCard from "../../components/TileCard";
import SearchTiles from "../../components/SearchTiles";
import { baseUrl } from "@/constants/baseUrl";

const getTiles = async () => {
  const res = await fetch(baseUrl);
  return await res.json();
};

const AllTiles = async ({ searchParams }) => {
  const sp = await searchParams;

  const photos = await getTiles();

  const searchItem = sp?.search
    ? photos.filter((photo) =>
        photo.title.toLowerCase().includes(sp.search.toLowerCase()),
      )
    : photos;
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold m-5">All Tiles</h2>

      <SearchTiles />

      {searchItem.length === 0 ? (
        <div className="border border-gray-500 rounded-2xl p-10 ">
          <p className="text-center text-red-500 text-3xl font-bold mt-10">
            Item not available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchItem.map((photo) => (
            <TileCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTiles;
