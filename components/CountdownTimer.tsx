"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the countdown duration (10 months, 8 days, 21 hours from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 10);
  targetDate.setDate(targetDate.getDate() + 8);
  targetDate.setHours(targetDate.getHours() + 21);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-white ">
      <span>{timeLeft.months}M</span>
      <span>{timeLeft.days}D</span>
      <span>{timeLeft.hours}H</span>
      <span>{timeLeft.minutes}M</span>
      <span>{timeLeft.seconds}S</span>
    </div>
  );
};

export default CountdownTimer;
