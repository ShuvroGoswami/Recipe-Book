// import React from 'react';
// import { FaLightbulb, FaClock, FaUtensils, FaThumbsUp } from 'react-icons/fa';

// const TipsSection = () => {
//   const tips = [
//     {
//       icon: <FaLightbulb className="text-yellow-500 w-8 h-8" />,
//       title: 'Pro Cooking Tips',
//       description: 'Always prep your ingredients before starting to cook for smooth workflow.',
//     },
//     {
//       icon: <FaClock className="text-blue-500 w-8 h-8" />,
//       title: 'Time Management',
//       description: 'Use timers and multitask smartly to get dishes done on time.',
//     },
//     {
//       icon: <FaUtensils className="text-green-500 w-8 h-8" />,
//       title: 'Right Tools',
//       description: 'Invest in good quality knives and cookware for better results.',
//     },
//     {
//       icon: <FaThumbsUp className="text-red-500 w-8 h-8" />,
//       title: 'Share & Enjoy',
//       description: 'Share your favorite recipes and get feedback from friends and family.',
//     },
//   ];

//   return (
//     <section className="max-w-4xl mx-auto my-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-8">Cooking Tips & Tricks</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {tips.map(({ icon, title, description }, idx) => (
//           <div
//             key={idx}
//             className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//           >
//             <div>{icon}</div>
//             <div>
//               <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
//               <p className="text-gray-700">{description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TipsSection;

import React from 'react';
import { FaLightbulb, FaClock, FaUtensils, FaThumbsUp } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

const TipsSection = () => {
  const tips = [
    {
      icon: <FaLightbulb className="text-yellow-500 w-8 h-8" />,
      title: 'Pro Cooking Tips',
      description: 'Always prep your ingredients before starting to cook for smooth workflow.',
    },
    {
      icon: <FaClock className="text-blue-500 w-8 h-8" />,
      title: 'Time Management',
      description: 'Use timers and multitask smartly to get dishes done on time.',
    },
    {
      icon: <FaUtensils className="text-green-500 w-8 h-8" />,
      title: 'Right Tools',
      description: 'Invest in good quality knives and cookware for better results.',
    },
    {
      icon: <FaThumbsUp className="text-red-500 w-8 h-8" />,
      title: 'Share & Enjoy',
      description: 'Share your favorite recipes and get feedback from friends and family.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Cooking Tips & Tricks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tips.map(({ icon, title, description }, idx) => (
          <Fade cascade direction="up" triggerOnce key={idx}>
            <div
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;

