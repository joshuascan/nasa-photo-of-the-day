import React from 'react';

const Header = (props) => {
    const { data } = props;

    return (
        <div className='header-container'>
            <h1>{data.title}</h1>
            <h2>{data.date}</h2>
        </div>
    );
};

export default Header;