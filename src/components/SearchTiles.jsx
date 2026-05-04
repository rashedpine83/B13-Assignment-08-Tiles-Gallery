"use client";

import { Button } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchTiles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();



  useEffect(() => {
    const syncSearchFromURL = () => {
      const search = searchParams.get("search") || "";
      setSearchTerm(search);
    };
    syncSearchFromURL();
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center m-6">
      <div className="relative w-full max-w-xl">
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder="Search tiles..."
          className="w-full pl-12 pr-4 py-3 border rounded-full shadow"
        />
      </div>

      <Button onClick={handleSearch} className="ml-2">
        Search
      </Button>
    </div>
  );
};

export default SearchTiles;
