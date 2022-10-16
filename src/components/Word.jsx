import React from "react";
import { useEffect, useState } from 'react'


const Word = ({ letter}) => {

    return <span className="word text-6xl" 
        style={{
            position: 'absolute',
            transform: `translate(${letter.x}px, ${letter.y}px) rotate(${letter.rotate}deg)`,

            fontSize: `${letter.fontSize}px`,
        }}
    >{letter.letter}</span>;
};

export default Word;
