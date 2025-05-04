import React from 'react';
import Hero from './hero.jsx';
 import SupportSection from './SupportSection.jsx';
import InfoSection from './InfoSection.jsx';
import Testimonials from './Testimonials.jsx';
import FinalSection from './FinalSection.jsx';
export default function Home() {
  return (
  <>
  <Hero/>
  <InfoSection/>
  <SupportSection/>
  <Testimonials/>
  <FinalSection/>
  </>
  )
}