import React from 'react';

const backgroundPath = new URL('../assets/triangle.jpg', import.meta.url);

const Background = () => {
    return (
    <img src={backgroundPath} alt="triangle dans le ciel" />
    );
}

export default Background;