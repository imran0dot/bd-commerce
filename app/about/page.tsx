import Image from 'next/image';
import React from 'react';
import About_img from '../../public/assets/images/about/about_img.png'
import Subscription from '@/components/Subscription/Subscription';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const page = () => {
    return (
        <div className='my-8 mx-auto w-10/12'>
            <SectionTitle subTitle='ABOUT ' title='US' />

            {/* About Content */}
            <div className='flex gap-5 my-10'>
                <div className='lg:col-span-2 '>
                    <Image src={About_img} alt='About' />
                </div>
                <div className='lg:col-span-4 p-5 flex flex-col justify-center'>
                    <p className='text-sm text-gray-600'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <br />
                    <p className='text-sm text-gray-600'>Since our inception, we&apos;ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <br />
                    <h4 className='text-xl font-semibold'>Our Mission</h4>
                    <br />
                    <p className='text-sm text-gray-600'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We&apos;re dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>

            {/* Why Choose us */}

            <div>
                <div className=' flex mb-5'>
                <SectionTitle subTitle='WHY' title='CHOOSE US' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-5'>
                    <div className='p-5 lg:p-[80px] border rounded-md'>
                        <h5 className='font-semibold mb-3 text-sm'>Quality Assurance:</h5>
                        <p className='text-[12px]'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </div>

                    <div className='p-5 lg:p-[80px] border rounded-md'>
                        <h5 className='font-semibold mb-3 text-sm'>Convenience:</h5>
                        <p className='text-[12px]'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                    </div>

                    <div className='p-5 lg:p-[80px] border rounded-md'>
                        <h5 className='font-semibold mb-3 text-sm'>Exceptional Customer Service:</h5>
                        <p className='text-[12px]'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                    </div>
                </div>
            </div>

            {/* Subscription */}
            <div>
                <Subscription />
            </div>
        </div>
    );
};

export default page;
