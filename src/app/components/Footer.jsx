import React from 'react';
import SocialLink from "../../../Images/social link.jpg";
import Image from 'next/image';

function Footer() {
    return (
        <footer className='bg-[#F4F4F5] grid md:grid-cols-3 grid-cols-1 gap-10 md:p-20 p-5'>
            {/* Core Courses Section */}
            <div className='space-y-5'>
                <h1 className='font-bold text-xl'>Core Courses</h1>
                <div>
                    <h2>Programming Fundamentals</h2>
                    <h2>Web2 Using NextJS</h2>
                    <h2>Earn as You Learn</h2>
                </div>
            </div>

            {/* Advanced Courses Section */}
            <div className='space-y-5'>
                <h1 className='font-bold text-xl'>Advanced Courses</h1>
                <div>
                    <h2>Web 3 and Metaverse</h2>
                    <h2>Cloud-Native Computing</h2>
                    <h2>Artificial Intelligence (AI) and Deep Learning</h2>
                    <h2>Ambient Computing and IOT</h2>
                    <h2>Genomics and Bioinformatics</h2>
                    <h2>Network Programmability and Automation</h2>
                </div>
            </div>

            {/* Social Links Section */}
            <div className='space-y-5'>
                <h1 className='font-bold text-xl'>Social Links</h1>
                <Image src={SocialLink} alt='socialLink' className='w-52' />
                <h1>education@governorsindh.com</h1>
            </div>

            {/* Acknowledgment Section */}
            <div className="col-span-1 md:col-span-3 text-center pt-5">
                <h2 className="text-gray-600 text-sm">
                    Website developed by <span className="font-bold">Abdul Waheed</span>, Q2 Sunday Class (2:00 PM - 5:00 PM)
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
