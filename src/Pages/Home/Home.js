import React from 'react';
import './Home.css';
import Forms from '../../Components/Forms/Forms';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Vision from '../../Components/Vision/Vision';
import Activities from '../../Components/Activites/Activities';

export default function Home() {
  return (
    <div className="home-background">
        <Header />
        <Hero />
        <Vision />
        <Activities />
        <Forms />
    </div>
  )
}
