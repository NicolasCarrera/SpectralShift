import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
    const { currentMode, setTheme } = useTheme();

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-full ${currentMode === 'light' ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label="Modo claro"
            >
                ☀️
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-full ${currentMode === 'dark' ? 'bg-indigo-400' : 'bg-gray-200 dark:bg-gray-700'}`}
                aria-label="Modo oscuro"
            >
                🌙
            </button>
        </div>
    );
};
