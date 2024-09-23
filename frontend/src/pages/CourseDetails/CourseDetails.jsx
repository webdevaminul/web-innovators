import './courseDetails.css'
import RightCard, { TextCard, VideoCard } from './RightCard';

const CourseDetails = () => {
    return (
        <div className='w-full heading '>
            <div className="max-w-[1320px] mx-auto relative md:flex gap-7 px-5">
                <div className='md:hidden block pt-5'>
                    <VideoCard />
                </div>

                <div className=''>
                    <h1 className='text-white text-2xl sm:text-4xl font-bold font-inter pt-5 md:pt-14 mb-5'>HSC 26 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)</h1>

                    <p className='text-[#afafaf9f] pb-10'>
                        তোমরা যারা এইচএসসি ২০২৬ পরীক্ষায় বিজ্ঞান, ব্যবসায় শিক্ষা কিংবা মানবিক বিভাগ থেকে অংশ নিচ্ছো, তোমাদের নিশ্চয়ই বিভাগীয় বিষয়ের বাইরের পাঁচটি বিষয়ের একটি পূর্ণাঙ্গ প্রস্তুতি প্রয়োজন? কেননা বিভাগীয় বিষয়গুলোতে জোর দিতে দিতে আমরা অনেক সময় এসব গুরুত্বপুর্ণ বিষয়ের কথা ভুলে বসে থাকি। তাই, তোমাদের কথা চিন্তা করেই টেন মিনিট স্কুল নিয়ে এসেছে এইচএসসি পরীক্ষার বাংলা ও ইংরেজি উভয় পত্রের এবং আইসিটিসহ মোট পাঁচটি বিষয়ের উপর একটি পূর্ণাঙ্গ কোর্স “HSC 2026 Online Batch (BEI)”। এইচএসসি পরীক্ষায় বিভাগ বহির্ভূত এসব বিষয়ে GPA 5 নিশ্চিত করতে এই একটি কোর্সই তোমার জন্য যথেষ্ট।

                        এই কোর্সে তোমাদের এইচএসসি পরীক্ষায় বাংলা ও ইংরেজি উভয় পত্র এবং তথ্য ও যোগাযোগ প্রযুক্তি বিষয়গুলো নিয়েই পূর্ণাঙ্গ প্রস্তুতি নিশ্চিত করা হবে।
                    </p>
                </div>

                <div className='lg:min-w-[450px] md:min-w-[330px] h-0 border-0'></div>

                <div className='absolute top-14 right-0 lg:w-[450px] w-[330px] border border-[#92929236] hidden md:block'>
                    <RightCard />
                </div>
            </div>
            <div className='md:hidden block pt-5'>
                <TextCard />
            </div>
        </div>
    );
};

export default CourseDetails;