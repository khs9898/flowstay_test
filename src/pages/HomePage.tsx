import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                  <img
                    src="/about-team.png"
                    alt="Flow Stay Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Flow Stay</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                  주차 산업의 혁신을 이끄는<br />대한민국 No.1 파트너
                </h3>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  플로우스테이는 단순한 주차장 운영을 넘어, 공간의 가치를 극대화하는 솔루션을 제공하며, 데이터 기반의 분석과 최첨단 관제 시스템을 결합하여 고객과 환경에 최적화된 솔루션을 제공하며 차별화된 주차장을 구축하는데 앞장서고 있습니다.
                </p>
                <a 
                  href="#services"
                  className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all"
                >
                  자세히 알아보기
                </a>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
