import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Lock, KeyRound } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('admin_auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 간단한 비밀번호 설정 (예: 1234)
    // 실제 운영 환경에서는 환경 변수나 서버 측 검증이 필요하지만, 
    // 여기서는 요청하신 대로 클라이언트 측에서 간단히 구현합니다.
    if (password === 'ghks6508!') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">관리자 로그인</h1>
            <p className="text-gray-500 text-sm mt-2">접속을 위해 비밀번호를 입력해주세요.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호 입력"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98]"
            >
              로그인
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
