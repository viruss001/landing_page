import React from 'react';

const TaxServices = () => {
  const services = [
    {
      title: 'Tax Planning Services',
      description: 'Maximize tax savings with Tax2win\'s Tax Advisory Services, offering guidance on advance tax calculations, property transactions, and more.',
      button: 'Get Expert Help',
      highlight: true,
    },
    {
      title: 'Income Tax Notice Assistance',
      description: 'A dedicated tax expert helps you navigate and respond to notices under sections 139(9), 143(1), high-value transactions, and other notices from the Income Tax Department.',
      link: 'Connect with Tax Experts',
    },
    {
      title: 'Updated Return Filing (ITR-U)',
      description: 'ITR-U helps individuals to update the correct income in the already filed ITR and also provides an opportunity for those who haven’t filed previously.',
      link: 'File Now',
    },
    {
      title: 'File ITR Yourself (DIY filing)',
      description: 'Trust us; you can file your Income tax return on your own. It’s fast, easy, and safe when you file ITR with Tax2win on your own.',
      link: 'Start Filing',
    },
    {
      title: 'Expert Assisted ITR Filing',
      description: 'Hire personal eCA to do Income Tax Filing for you. It is convenient & fast, with maximum refund calculated for you.',
      link: 'Book eCA Today',
    },
  ];

  return (
    <div className="bg-[#f0fdf4] py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Income Tax Services We Offer</h2>

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 auto-rows-fr">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              rounded-xl shadow-sm p-6 flex flex-col justify-between
              ${service.highlight ? 'bg-[#336699] text-white md:row-span-2' : 'bg-white text-gray-800'}
            `}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>

            <div className="mt-6">
              {service.button ? (
                <button className="bg-white text-[#336699] font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-all">
                  {service.button} →
                </button>
              ) : (
                <a href="#" className="text-green-600 font-semibold inline-flex items-center hover:underline">
                  {service.link} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxServices;
