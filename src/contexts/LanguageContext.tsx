import {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import {Language} from "../types/common.ts";


interface ILanguageContextProps {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const LanguageContext = createContext<ILanguageContextProps>({
  language: 'ar',
  setLanguage: () => {},
});

interface ILanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<ILanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
