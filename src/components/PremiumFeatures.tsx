import React from 'react';

// --- Types & Data ---

interface Feature {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  // Gradient classes for background and icon circle
  bgGradient: string;
  iconGradient: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Lightning Fast",
    desc: "Optimized for speed with edge caching and zero-config deployments that scale instantly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    bgGradient: "from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100",
    iconGradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Secure & Safe",
    desc: "Enterprise-grade security with automated backups, SSL, and banking-level encryption standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    bgGradient: "from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100",
    iconGradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    title: "Fully Responsive",
    desc: "Fluid layouts that adapt perfectly to any screen size, from massive desktops to mobile phones.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    bgGradient: "from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100",
    iconGradient: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Easy Customization",
    desc: "Change colors, fonts, and layouts effortlessly with our intuitive visual design editor.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.85 6.361a15.996 15.996 0 0 0-4.647 4.763m0 0c-.399.399-.78.821-1.128 1.25" />
      </svg>
    ),
    bgGradient: "from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100",
    iconGradient: "from-pink-500 to-rose-600"
  },
  {
    id: 5,
    title: "Team Collaboration",
    desc: "Built-in commenting, version control, and real-time multiplayer editing for your team.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    bgGradient: "from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100",
    iconGradient: "from-orange-500 to-amber-600"
  },
  {
    id: 6,
    title: "24/7 Support",
    desc: "Our dedicated support team is available round the clock to help you with any issues.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
      </svg>
    ),
    bgGradient: "from-purple-50 to-fuchsia-50 hover:from-purple-100 hover:to-fuchsia-100",
    iconGradient: "from-purple-500 to-fuchsia-600"
  }
];

const PremiumFeatures = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Why top companies <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-500 to-blue-600">
              choose our platform
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to build world-class applications. 
            Our feature set is designed to help you scale without friction.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className={`
                group relative p-8 rounded-2xl bg-linear-to-br ${feature.bgGradient}
                border border-white/50 shadow-sm hover:shadow-xl 
                transition-all duration-300 ease-out transform hover:-translate-y-2
              `}
            >
              {/* Icon Circle */}
              <div className={`
                w-14 h-14 mb-6 rounded-xl flex items-center justify-center shadow-md
                bg-linear-to-br ${feature.iconGradient}
                transform group-hover:scale-110 transition-transform duration-300
              `}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.desc}
              </p>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumFeatures;
