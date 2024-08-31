import Products from '@/components/Products/Products';
import BannerTitle from '@/components/shared/BannerTitle/BannerTitle';
import Container from '@/components/shared/Container/Container';
import React from 'react';
import Categories from '@/components/shared/Categories/Categories';

const Page = () => {
    return (
        <div>
            <BannerTitle title='shop' />
            <Container>
                <div className='flex flex-col md:flex-row gap-2 mt-10 px-5'>
                    <div className='md:w-2/12 w-full'>
                        <Categories />
                    </div>
                    <div className='md:w-10/12 w-full'>
                        <Products />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;
