import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <button 
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          {service.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
