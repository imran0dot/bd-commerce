import React from 'react';
import HeroImg from '../../public/assets/images/Home/hero_img.png'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='my-5 grid grid-cols-1 md:grid-cols-2 border border-black'>
            <div className='flex items-center justify-center' >
                <div className='space-y-5'>
                    <div className='flex items-center gap-3 '>
                        <hr className='w-10 border-[1px] border-black' />
                        <h3>OUR BESTSELLERS</h3>
                    </div>
                    <h1 className='text-5xl'>Latest Arrivals</h1>
                    <div className='flex items-center gap-3 '>
                        <h3>OUR BESTSELLERS</h3>
                        <hr className='w-10 border-[1px] border-black' />
                    </div>
                </div>
            </div>
            <div >
                <Image
                    src={HeroImg.src}
                    width={800}
                    height={800}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
};

export default Hero;