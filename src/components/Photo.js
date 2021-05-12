/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Photo = (props) => {
    const { data } = props;

    return (
        <div className='photo-container'>
            <img
                alt='NASA image of the day'
                className='image'
                src={data.hdurl}
            />
        </div>
    );
};

export default Photo;