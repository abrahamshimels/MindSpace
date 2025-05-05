import React from 'react';
import TopicCard from './TopicCard';


const topicsData = [
  {
    id: 1,
    topic: "Anxiety",
    description: "Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. It can manifest as worry, nervousness, or unease about an event or uncertain outcome."
  },
  {
    id: 2,
    topic: "Depression",
    description: "Depression is a common and serious mood disorder that negatively affects how you feel, the way you think, and how you act. It can lead to emotional and physical problems and decrease a person's ability to function."
  },
  {
    id: 3,
    topic: "Stress",
    description: "Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you feel frustrated, angry, or nervous. It's your body's reaction to a challenge or demand."
  },
  {
    id: 4,
    topic: "Sleep Issues",
    description: "Sleep issues, also known as sleep disorders or sleep disturbances, encompass a wide range of conditions that affect the ability to sleep well regularly. They can impact health, safety, and quality of life."
  },
  {
    id: 5,
    topic: "Panic Disorder",
    description: "Panic Disorder is an anxiety disorder characterized by recurrent, unexpected panic attacks. These are episodes of intense fear accompanied by physical symptoms like heart palpitations, shortness of breath, or dizziness."
  },
  {
    id: 6,
    topic: "Academic Pressure",
    description: "Academic pressure refers to the stress and anxiety experienced by students due to the demands and expectations of academic performance, often intensified by competition, parental expectations, and future career concerns."
  }
];

const TopicsSection = () => {
  return (
    <section className="bg-[#fff2f2] py-20">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-3xl font-semibold mb-12 text-black text-center">Learn more about different mental health topics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topicsData.map((topi, index) => (
            <div
              key={topi.id}
              className="min-h-[360px] opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }} 
            >
              <TopicCard id={topi.id} title={topi.topic} description={topi.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
