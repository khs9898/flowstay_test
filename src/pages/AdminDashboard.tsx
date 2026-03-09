import React from 'react';
import { useSite } from '../context/SiteContext';
import { LayoutDashboard, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { settings, updateSettings } = useSite();
  const [activeTab, setActiveTab] = React.useState<'overview' | 'settings'>('overview');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8 border-b border-gray-100">
          <Link to="/" className="text-xl font-bold tracking-tighter text-blue-900">FLOW STAY</Link>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Admin Panel</div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" /> 대시보드
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Settings className="mr-3 h-5 w-5" /> 사이트 설정
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => {
              localStorage.removeItem('admin_auth');
              window.location.href = '/';
            }}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut className="mr-3 h-5 w-5" /> 로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">대시보드 개요</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: '오늘의 방문자', value: '1,284', change: '+12%', color: 'blue' },
                { label: '새로운 문의', value: '12', change: '+3', color: 'green' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="text-gray-500 text-sm mb-2">{stat.label}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
                    {stat.change} vs yesterday
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-6">최근 문의 내역</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                        {i === 1 ? 'K' : i === 2 ? 'L' : 'P'}
                      </div>
                      <div>
                        <div className="text-sm font-bold">문의자 {i}</div>
                        <div className="text-xs text-gray-500">주차장 위탁 운영 문의</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">2시간 전</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900">사이트 설정</h1>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">사이트 제목</label>
                <input
                  type="text"
                  value={settings.siteTitle}
                  onChange={(e) => updateSettings({ siteTitle: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">히어로 헤드라인</label>
                <input
                  type="text"
                  value={settings.heroHeadline}
                  onChange={(e) => updateSettings({ heroHeadline: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">히어로 서브헤드라인</label>
                <textarea
                  value={settings.heroSubheadline}
                  onChange={(e) => updateSettings({ heroSubheadline: e.target.value })}
                  rows={3}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기본 색상 (Primary)</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                      className="w-12 h-12 rounded-lg border-none p-0 overflow-hidden cursor-pointer"
                    />
                    <span className="text-sm font-mono text-gray-500 uppercase">{settings.primaryColor}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">강조 색상 (Secondary)</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => updateSettings({ secondaryColor: e.target.value })}
                      className="w-12 h-12 rounded-lg border-none p-0 overflow-hidden cursor-pointer"
                    />
                    <span className="text-sm font-mono text-gray-500 uppercase">{settings.secondaryColor}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">푸터 텍스트</label>
                <input
                  type="text"
                  value={settings.footerText}
                  onChange={(e) => updateSettings({ footerText: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="pt-4">
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">
                  설정 저장하기
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
