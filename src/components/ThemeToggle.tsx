import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'}`}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};