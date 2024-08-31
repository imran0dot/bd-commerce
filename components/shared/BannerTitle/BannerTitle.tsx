import React from 'react';

const BannerTitle = ({ title }: { title: string }) => {
    return (
        <h2 className='bg-blue-600 text-white text-center text-4xl py-10 capitalize'>
            {title}
        </h2>
    );
};

export default BannerTitle;