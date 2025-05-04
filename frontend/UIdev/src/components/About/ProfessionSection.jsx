
import React from 'react';
import ProfessionHeader from './ProfessionHeader';
import ProfessionCard from './ProfessionCard';
import professionData from './ProfessionData';

function ProfessionSection() {
  const headerTitle = 'Our Mental Health Professionals';
  const headerDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  return (
    <section className='py-16 px-4 md:px-8'>
        <div className="max-w-7xl mx-auto">

      
      <ProfessionHeader title={headerTitle} description={headerDescription} />
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionData.map((profession) => (
          <ProfessionCard
            key={profession.id}
            name={profession.name}
            description={profession.description}
            imageUrl={profession.imageUrl}
          />
        ))}
      </div>
      </div>
    </section>
  );
}

export default ProfessionSection;