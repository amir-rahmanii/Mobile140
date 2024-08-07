import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // تابعی برای محاسبه زمان باقی‌مانده تا نیمه شب
    function calculateTimeLeft() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // نیمه شب فردا
        const difference = midnight - now; // اختلاف زمانی به میلی‌ثانیه

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000); // هر ثانیه یک بار

        return () => clearInterval(intervalId); // پاک‌سازی وقتی کامپوننت از بین برود
    }, []);

    return (
            <p>{`${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}</p>
    );
};

export default Timer;