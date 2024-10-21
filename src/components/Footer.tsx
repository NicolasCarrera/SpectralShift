export default function Footer() {
  return (
    <footer className="bg-orange-900 dark:bg-gray-900 text-lg">
      <div className="container mx-auto">
        <ul className="flex flex-col gap-4 py-10">
          <li><a className="underline" href="https://cloudinary.com/" target="_blank">Cloudinary</a></li>
          <li><a className="underline" href="https://github.com/NicolasCarrera/SpectralShift.git" target="_blank">GitHub</a></li>
        </ul>
      </div>
      <p className="bg-orange-950 dark:bg-gray-950 text-center text-sm py-4">&copy; This content aims to showcase Cloudinary's image transformation capabilities while maintaining the requested Halloween theme and mood shift between light and dark modes 2024.</p>
    </footer>
  )
}