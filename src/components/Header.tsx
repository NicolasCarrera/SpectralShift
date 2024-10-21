import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-orange-800 dark:bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Spectral Shift</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};