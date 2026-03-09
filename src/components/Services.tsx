import React from 'react';
import { motion } from 'motion/react';
import { 
  Wallet, 
  TrendingUp, 
  Handshake, 
  Layout, 
  ClipboardList, 
  Smartphone, 
  Edit3, 
  Map,
  CheckCircle2 
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

const Services = () => {
  const { settings } = useSite();

  const services = [
    {
      title: '초기투자부담 제로',
      description: '주차장비 설치 및 환경개선 비용 전액을 플로우스테이에서 부담하여 초기 투자에 대한 부담을 없애드립니다.',
      icon: Wallet,
      features: ['장비 설치비 전액 지원', '환경 개선 비용 지원']
    },
    {
      title: '주차수익 증가',
      description: '최첨단 무인 장비와 맞춤형 마케팅 전략을 통해 주차장의 수익성을 극대화합니다.',
      icon: TrendingUp,
      features: ['24시간 무인 운영 가능', '맞춤형 마케팅 전략']
    },
    {
      title: '안정적 운영',
      description: '업계 최고 전문가들의 운영 노하우를 바탕으로 안정적인 관리와 사고 보장 시스템을 제공합니다.',
      icon: Handshake,
      features: ['전문가 운영 노하우', '영업배상 책임보험 가입']
    },
    {
      title: '주차장 환경개선',
      description: '노후된 시설을 개선하고 최적화된 디자인을 제안하여 주차장의 가치를 높입니다.',
      icon: Layout,
      features: ['시설 환경개선 공사', '최적화된 디자인 제안']
    },
    {
      title: '원스탑 서비스',
      description: '관제부터 민원 관리, 사고 대응까지 주차장 운영에 필요한 모든 업무를 통합 관리합니다.',
      icon: ClipboardList,
      features: ['24시간 통합관제 운영', '민원 및 사고 종합 관리']
    },
    {
      title: '신속 비대면 서비스',
      description: '정기권, 할인권, 이용 문의 등 모든 업무를 비대면으로 신속하게 처리할 수 있는 시스템을 제공합니다.',
      icon: Smartphone,
      features: ['비대면 업무 처리 시스템', '정기권/할인권 간편 관리']
    },
    {
      title: '용도별 맞춤형',
      description: '건물 용도에 적합한 운영 방안과 부동산 자산 가치를 높이는 밸류애드 방안을 제안합니다.',
      icon: Edit3,
      features: ['건물별 맞춤 운영 제안', '부동산 자산 가치 증대']
    },
    {
      title: '주차장 개발 / 매입',
      description: '주차 전용 건축물이나 나대지 등 다양한 유형의 부지를 맞춤형으로 개발하거나 매입합니다.',
      icon: Map,
      features: ['유형별 맞춤 개발', '부지 매입 및 컨설팅']
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Services</h2>
          <p className="text-4xl font-bold text-gray-900 tracking-tight">
            플로우스테이가 제공하는<br />전문 주차 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{ backgroundColor: `${settings.secondaryColor}10`, color: settings.secondaryColor }}
              >
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-start text-xs text-gray-500">
                    <CheckCircle2 size={14} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
