import React from 'react';
import { motion } from 'motion/react';
import { useSite } from '../context/SiteContext';
import { ArrowRight, ShieldCheck, TrendingUp, Cpu, Users } from 'lucide-react';

const Hero = () => {
  const { settings } = useSite();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573163231162-80113439c4d9?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Parking Lot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
            {settings.heroHeadline}
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {settings.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center"
              style={{ backgroundColor: settings.secondaryColor }}
            >
              서비스 둘러보기 <ArrowRight className="ml-2" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-lg transition-all hover:bg-white/20 flex items-center justify-center"
            >
              컨설팅 문의
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
