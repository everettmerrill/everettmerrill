export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-2 px-6 mt-2 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        {/* Shortcuts */}
        <div className="mb-1">
          <h3 className="font-semibold text-center mb-1">Quick Links</h3>
          <nav className="flex gap-3 justify-center">
            <a href="/" className="hover:text-green-400">Home</a>
            <a href="/tutorials" className="hover:text-green-400">Tutorials</a>
            <a href="/projects" className="hover:text-green-400">Projects</a>
            <a href="/contact" className="hover:text-green-400">Contact</a>
            <a href="/snake" className="hover:text-green-400">Play Snake</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-1">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {currentYear} Everett Merrill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}