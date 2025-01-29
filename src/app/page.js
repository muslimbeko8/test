'use client';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Ekranni kengaytirish (full screen)
  }, []);

  return (
    <div>
      <h1>Salom, bu Telegram Web App!</h1>
      <p>Telegram Web App'ga xush kelibsiz.</p>
    </div>
  );
};

export default Home;
