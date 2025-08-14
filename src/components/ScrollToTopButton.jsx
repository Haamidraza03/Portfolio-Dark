import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsVisible(true); // Show the button
            } else {
                setIsVisible(false); // Hide the button
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="scrollToTopBtn"
            title="Go to top"
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={scrollToTop}
        >
            &#8679;
        </button>
    );
};

export default ScrollToTopButton;
