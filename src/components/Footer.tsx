export default function Footer() {
  return (
    <footer className="py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:underline">Política de privacidad</a></li>
          <li><a href="#" className="hover:underline">Términos de uso</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </footer>
  )
}