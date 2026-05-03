import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 mt-10">

      <div className="text-6xl font-bold text-red-500">404</div>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

     <Link href="/">
  <Button className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition">
    Go Home
  </Button>
</Link>


    </div>
  );
};

export default NotFoundPage;