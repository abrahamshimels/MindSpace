import React from 'react';
import Hero from '../components/Learn/Hero';
import RelatedTopicsSection from '../components/Learn/RelatedTopicSection'; 
import TopicsSection from '../components/Learn/TopicsSection';

function Learn() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Main Topics Section */}
      <TopicsSection/>

      {/* Related Topics Section */}
      <RelatedTopicsSection />

      
    </div>
  );
}

export default Learn;
