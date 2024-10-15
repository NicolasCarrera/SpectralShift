import { useTheme } from '../hooks/useTheme';

export const ThemedComponent: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h1 className="text-2xl font-bold">Componente con Tema</h1>
            <p>Este es un ejemplo de cómo usar el contexto del tema.</p>
        </div>
    );
};