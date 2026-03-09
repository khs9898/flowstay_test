import React, { createContext, useContext, useState, useEffect } from 'react';

export interface GlobalSettings {
  siteTitle: string;
  primaryColor: string;
  secondaryColor: string;
  footerText: string;
  heroHeadline: string;
  heroSubheadline: string;
}

interface SiteContextType {
  settings: GlobalSettings;
  updateSettings: (settings: Partial<GlobalSettings>) => void;
}

const defaultSettings: GlobalSettings = {
  siteTitle: 'Flow Stay (플로우스테이)',
  primaryColor: '#1a237e',
  secondaryColor: '#2962ff',
  footerText: '© 2024 Flow Stay. All rights reserved.',
  heroHeadline: '공간의 가치를 높이는 프리미엄 주차 솔루션',
  heroSubheadline: '플로우스테이는 데이터와 기술을 바탕으로 최적의 주차 운영 및 컨설팅 서비스를 제공합니다.',
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<GlobalSettings>(defaultSettings);

  const updateSettings = (updatedFields: Partial<GlobalSettings>) => {
    setSettings({ ...settings, ...updatedFields });
  };

  return (
    <SiteContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};
