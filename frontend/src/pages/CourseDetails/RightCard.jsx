import React from 'react';

const RightCard = () => {
    return (
        <div className='bg-white p-10'>
            <div>

            </div>
            <div>
                <div className='flex items-center gap-3'>
                    <h1 className='font-bold font-bai text-2xl'>৳5850</h1>
                    <del className='font-semibold font-bai text-xl'>৳7500</del>
                    <p className='bg-secondary flex items-center gap-1 text-white font-bold px-3 py-[2px] w-max rounded-sm text-sm'>1650 ৳ ছাড়</p>
                </div>

                <p className='text-sm text-info pt-1'>ব্যাচ ১ (সম্পূর্ণ সিলেবাস) এবং প্রিন্টেড লেকচার শিট</p>

                <button className='bg-secondary font-bai rounded-sm py-2 px-5 text-white font-semibold text-lg mt-5'>Enroll Now</button>

                <p className='text-xl font-bold mt-8 font-inter'>এই কোর্সে যা থাকছে</p>

                <ul className='list-none text-info text-sm font-inter'>
                    <li>৩টি বিষয়</li>
                    <li>প্রতি সপ্তাহে ৫টি লাইভ ক্লাস</li>
                    <li>ডেইলি ও সাপ্তাহিক এক্সাম</li>
                    <li>অধ্যায়ভিত্তিক লেকচার শিট</li>
                    <li>৩ সেট মডেল টেস্ট</li>
                </ul>
            </div>
        </div>
    );
};

export default RightCard;