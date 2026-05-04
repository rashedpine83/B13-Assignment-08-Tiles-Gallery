
import HeadLinesMarquee from "./HeadLineMarquee";
import { baseUrl } from "@/constants/baseUrl";


const HeadLines = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();

    return (
        
        <div className="flex justify-between items-center gap-3 bg-gray-200 py-2 px-2 container mx-auto">
            <p className="p-2 w-30 bg-[#6D214F] text-white text-xs md:text-[16px]">New Arrivals:</p>

            <HeadLinesMarquee data={data} />
        </div>
    );
};

export default HeadLines;