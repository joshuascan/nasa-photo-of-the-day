import React from 'react';

const Description = (props) => {
    const { data } = props;

    return (
        <div className='description-container'>
            <p>{data.explanation}</p>
        </div>
    );
};

export default Description;