import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label="Modo claro"
            >
                ☀️
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-indigo-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label="Modo oscuro"
            >
                🌙
            </button>
            <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-full ${theme === 'system' ? 'bg-green-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label="Modo del sistema"
            >
                💻
            </button>
        </div>
    );
};
