import { IoBookOutline } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { BsQuestionOctagon } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuFileQuestion } from "react-icons/lu";


export const VideoCard = () => {
    return (
        <div className="video-container w-full aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/yckDUJh7mxo?si=UAjiy_7_ULoAq8u1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export const TextCard = () => {
    return (
        <div className="md:p-2 md:pb-3 py-7 px-4 mt-3 bg-white">
            <div className='flex items-center gap-3'>
                <h1 className='font-bold font-bai text-2xl'>৳5850</h1>
                <del className='font-semibold font-bai text-xl'>৳7500</del>
                <p className='bg-secondary flex items-center gap-1 text-white font-bold px-3 py-[2px] w-max rounded-sm text-sm'>1650 ৳ ছাড়</p>
            </div>

            <p className='text-sm text-info pt-1'>ব্যাচ ১ (সম্পূর্ণ সিলেবাস) এবং প্রিন্টেড লেকচার শিট</p>

            <button className='bg-secondary font-bai rounded-sm py-2 px-5 text-white font-semibold text-lg mt-5'>Enroll Now</button>

            <p className='text-xl font-bold mt-8 font-inter'>এই কোর্সে যা থাকছে</p>

            <ul className='list-none text-info font-inter space-y-2 mt-3'>
                <li className="details-li"><IoBookOutline /> <span>৩টি বিষয়</span></li>
                <li className="details-li"><CgMediaLive /> <span>প্রতি সপ্তাহে ৫টি লাইভ ক্লাস</span></li>
                <li className="details-li"><BsQuestionOctagon /> <span>ডেইলি ও সাপ্তাহিক এক্সাম</span></li>
                <li className="details-li"><LuFileSpreadsheet /> <span>অধ্যায়ভিত্তিক লেকচার শিট</span></li>
                <li className="details-li"><LuFileQuestion /> <span>৩ সেট মডেল টেস্ট</span></li>
            </ul>
        </div>
    )
}

const RightCard = () => {
    return (
        <div className='bg-white p-1 w-full'>
            <div>
                <VideoCard />
            </div>

            <div>
                <TextCard />
            </div>
        </div>
    );
};

export default RightCard;