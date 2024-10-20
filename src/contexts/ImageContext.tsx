import { createContext, ReactNode, useState } from "react"

interface ImageContextType {
  publicId: string;
  setPublicId: (id: string) => void;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [publicId, setPublicId] = useState('');
  return (
    <ImageContext.Provider value={{ publicId, setPublicId }}>
      {children}
    </ImageContext.Provider>
  );
}