import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};