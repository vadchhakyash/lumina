import  { useState, useEffect } from 'react';
import { ArrowRight, Star, Zap, Shield, PlayCircle, Users } from 'lucide-react';

const PremiumHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20 lg:pt-0">
      
      {/* --- Background Decoration --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-300/20 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Content --- */}
          <div className={`space-y-8 transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
                Now Available v2.0
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
              Build faster with <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 animate-gradient-x pb-2">
                Intelligent UI.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Create stunning web experiences with our next-gen component library. Designed for speed, built for performance, and loved by developers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-full bg-white text-gray-800 font-bold border border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                <PlayCircle className="w-5 h-5 text-purple-600" />
                Watch Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-4">
              {[
                { label: "Users", value: "10k+", icon: Users },
                { label: "Rating", value: "4.9/5", icon: Star },
                { label: "Components", value: "500+", icon: Zap },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-2xl">
                    {stat.value}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Image & Floating Cards --- */}
          <div className={`relative lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Main Hero Image */}
            <div className="relative w-full max-w-lg mx-auto animate-float-slow z-10">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-pink-600 rounded-4xl blur-2xl opacity-20 transform translate-y-4 scale-95"></div>
              <div className="relative rounded-4xl overflow-hidden shadow-2xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dashboard UI" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Card 1 (Top Right) */}
            <div className="absolute top-[10%] right-0 lg:-right-4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 animate-float-medium z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Performance</p>
                  <p className="text-sm font-bold text-gray-900">98/100 Score</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 (Bottom Left) */}
            <div className="absolute bottom-[15%] left-0 lg:-left-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 animate-float-fast z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Shield className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Security</p>
                  <p className="text-sm font-bold text-gray-900">Enterprise Grade</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- Inline CSS for Keyframes (Copy this to your global CSS or <style> tag) --- */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </section>
  );
};

export default PremiumHero;
