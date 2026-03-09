import React from 'react';
import { useSite } from '../context/SiteContext';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { settings } = useSite();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="FLOW STAY" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              플로우스테이는 주차장의 가치를 재정의하고, 최첨단 기술과 전문 컨설팅을 통해 공간의 수익성을 극대화합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">주요 서비스</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">주차장 위탁 운영</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">수익성 분석 컨설팅</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">관제 시스템 구축</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">스마트 주차 솔루션</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">고객 지원</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">연락처</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
                <span>경기도 이천시 진상미로1800번길 110-12</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>steve@flowstay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>{settings.footerText}</p>
          <p className="mt-4 md:mt-0">사업자 등록번호: 173-66-00449 | 대표: 오재상</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
