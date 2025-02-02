import React, { useState, useEffect } from 'react';

const BackgroundSlider = () => {
    const [currentImage, setCurrentImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage % 9) + 1);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={(`../images/background/img${currentImage % 9 + 1}.jpg`)}
                    alt="Background"
                    className="w-full h-full object-cover absolute top-0 left-0 animate-fade"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="p-4 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to the Online Voting System</h1>
                    <p className="text-sm md:text-lg">Enjoy the seamless transition of beautiful images.</p>
                </div>
            </div>
        </div>
    );
};

export default BackgroundSlider;

// Tailwind CSS classes explanation:
// - `relative w-full h-screen`: Ensures the slider takes up the full viewport height.
// - `absolute inset-0`: Positions elements to cover the entire slider area.
// - `object-cover`: Maintains aspect ratio and covers the container.
// - `animate-fade`: Smooth fade-in effect (add custom animation if needed).
// - `bg-black bg-opacity-50`: Semi-transparent black background for text content.
// - Responsive text classes like `text-3xl md:text-5xl` for dynamic scaling.
