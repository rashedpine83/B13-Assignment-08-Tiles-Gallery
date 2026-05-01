import { Button } from "@heroui/react";
import HeadLinesMarquee from "./HeadLineMarquee";


const HeadLines = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();

    return (
        
        <div className="flex justify-between items-center gap-3 bg-gray-200 py-2 px-2 container mx-auto">
            <p className="p-2 w-30 bg-[#6D214F] text-white ">New Arrivals:</p>

            <HeadLinesMarquee data={data} />
        </div>
    );
};

export default HeadLines;