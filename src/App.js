import "./App.css";
import { useEffect, useState } from "react";
import Word from "./components/Word";

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);
    const [letterList, setLetterList] = useState([]);

    // all hindi letters
    const letters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ"];
    console.log(width, height);
    useEffect(() => {
        for (let i = 0; i < letters.length; i++) {
            let letter = {
                letter: letters[i],
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height),
                rotate: Math.floor(Math.random() * 360),
                fontSize: Math.floor(Math.random() * (100 - 40) + 40),
            };

            let overlapping = false;
            for (let j = 0; j < letterList.length; j++) {
                let other = letterList[j];

                const dist = distance(letter.x, letter.y, other.x, other.y);
                if (dist < other.fontSize + letter.fontSize) {
                    overlapping = true;
                }
            }
            if (!overlapping) {
                setLetterList((letterList) => [...letterList, letter]);
            }
        }
    });

    const distance = (x1, y1, x2, y2) => {
        return Math.floor(
            Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        );
    };

    return (
        <div>
            <main>
                <div className="word-background bg-[#0D1117] h-screen overflow-hidden">
                    <div className="words relative">
                        {letterList.map((letter, index) => {
                            return <Word key={index} letter={letter} />;
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
