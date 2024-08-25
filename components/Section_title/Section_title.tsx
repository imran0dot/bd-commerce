import React from 'react';
import PropTypes from 'prop-types'
const Section_title = ({subTitle, title, description}) => {
    return (
        <div className='text-center space-y-3 px-5 lg:px-0'>
            <div className='lg:flex items-center gap-3 justify-center'>
                <h1 className=' lg:text-3xl font-semibold'><span className='text-gray-500'>{subTitle}</span> {title} </h1>
                <hr className='w-14 mx-auto lg:mx-0 border-[1px] border-black mt-2 lg:mt-0' />
            </div>
            {
                description &&
                <p className='text-gray-600 text-sm lg:text-md'>{description}</p>
            }
        </div>
    );
};

Section_title.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default Section_title;