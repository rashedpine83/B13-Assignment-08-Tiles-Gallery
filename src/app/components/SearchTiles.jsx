"use client";

import { Button } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchTiles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  

  const handleSearch = () => {
    
    const params = new URLSearchParams(searchParams);
    console.log(params)

    if (searchTerm.trim()) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-xl">

        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />

        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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