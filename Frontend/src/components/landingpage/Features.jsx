import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Digital Shift Handover Log',
      description: 'Record and access shift details for seamless handover and accountability',
      imgSrc: '/assets/1 (2).png',
    },
    {
      title: 'Incident Reporting',
      description: 'Report and document incidents quickly for immediate action and review',
      imgSrc: '/assets/2.png',
    },
    {
      title: 'Performance Dashboard',
      description: 'Visualize mine’s key performance indicators with charts and graphs',
      imgSrc: '/assets/3.png',
    },
    {
      title: 'Emergency Alerts',
      description: 'Immediate alerts for emergencies with their importance level',
      imgSrc: '/assets/4.png',
    },
    {
      title: 'Evacuation & Hazard Mapping',
      description: 'Record and access shift details for seamless handover and accountability',
      imgSrc: '/assets/5.png',
    },
    {
      title: 'Personalized Performance Report',
      description: 'Personalized performance report will be available based on employee’s work',
      imgSrc: '/assets/6.png',
    },
    {
      title: 'Personalized AI Bot',
      description: 'A Personalized AI chatbot to help the workers with their queries',
      imgSrc: '/assets/7.png',
    },
    {
      title: 'Safety Video Tutorial',
      description: 'Video tutorials on safety to make the workers more aware',
      imgSrc: '/assets/8.png',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center pl-32 pr-32 px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-semibold mb-8">FEATURES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="relative group bg-gray-800 p-6 rounded-lg">
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="w-full h-auto mb-4 transition-transform transform group-hover:scale-105"
            />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
