import React from 'react';
import './Home.css';
import Forms from '../../Components/Forms/Forms';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';

export default function Home() {
  return (
    <div className="home-background">
        <Header />
        <Hero />
        <Forms />
    </div>
  )
}
