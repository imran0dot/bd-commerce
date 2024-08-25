import React from 'react';
import PropTypes from 'prop-types'
const Section_title = ({subTitle, title, description}) => {
    return (
        <div>
            <div>
                <h1><span>{subTitle}</span> {title} </h1>
                <hr />
            </div>
            {
                description &&
                <p>{description}</p>
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