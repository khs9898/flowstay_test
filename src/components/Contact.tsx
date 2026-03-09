import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';

const Contact = () => {
  const { settings } = useSite();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '주차장 위탁 운영 문의',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xbdavrld', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', type: '주차장 위탁 운영 문의', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 text-white" style={{ backgroundColor: settings.primaryColor }}>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">지금 바로<br />상담을 시작하세요</h2>
              <p className="text-blue-200 mb-12 text-lg">
                주차장 운영 효율화와 수익성 극대화, 플로우스테이가 함께 고민하겠습니다.
              </p>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mr-6">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">이메일 문의</div>
                    <div className="text-xl font-bold">steve@flowstay.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mr-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm mb-1">본사 위치</div>
                    <div className="text-xl font-bold">경기도 이천시 진상미로1800번길 110-12</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-20">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">문의가 성공적으로 접수되었습니다</h3>
                  <p className="text-gray-600">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                  >
                    다시 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">성함 / 담당자명</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">문의 유형</label>
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option>주차장 위탁 운영 문의</option>
                      <option>수익성 분석 컨설팅 문의</option>
                      <option>시스템 구축 문의</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">문의 내용</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="문의하실 내용을 상세히 적어주세요"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center text-red-600 text-sm bg-red-50 p-4 rounded-xl">
                      <AlertCircle size={18} className="mr-2" />
                      오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-5 rounded-2xl text-white font-bold text-lg shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: settings.secondaryColor }}
                  >
                    {status === 'submitting' ? '보내는 중...' : '문의 보내기'} <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
