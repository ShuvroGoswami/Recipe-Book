import React from 'react';
import { Fade } from 'react-awesome-reveal';

const stories = [
  {
    id: 1,
    name: 'Sarah Johnson',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    story: 'Thanks to these amazing recipes, I discovered a passion for cooking and my family loves every meal I make!',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    photo: 'https://randomuser.me/api/portraits/men/36.jpg',
    story: 'I never thought cooking could be this easy. The tips and recipes here helped me become confident in the kitchen.',
  },
  {
    id: 3,
    name: 'Emily Brown',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    story: 'Sharing my own recipes and getting feedback has been the best experience. It’s like having a community of chefs!',
  },
];

const RealStoriesSection = () => {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Real Success Stories</h2>

      <div className="space-y-10">
        {stories.map(({ id, name, photo, story }) => (
          <Fade key={id} triggerOnce direction="up" cascade damping={0.1}>
            <div className="flex items-center bg-white rounded-lg shadow-md p-6 space-x-6">
              <img
                src={photo}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
              />
              <div>
                <h3 className="text-xl text-gray-900 font-semibold mb-1">{name}</h3>
                <p className="text-gray-800 italic">"{story}"</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default RealStoriesSection;
