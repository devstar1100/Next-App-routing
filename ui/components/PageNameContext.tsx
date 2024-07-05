import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

export interface PageNameContextType {
  value: any;
  setValue: (newValue: any) => void;
}

const PageNameContext = createContext<PageNameContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [value, setValue] = useState<any>('default value');

  return (
    <PageNameContext.Provider value={{ value, setValue }}>
      {children}
    </PageNameContext.Provider>
  );
};

export { MyProvider, PageNameContext };
