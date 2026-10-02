import { Link } from 'react-router';

function Books() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
      Katalog Buku
      </h1>

      <div className="space-y-3">
        <Link
          to="/books/1"
          className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50"
        >
        Buku 1 - Belajar React
        </Link>

        <Link
          to="/books/2"
          className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50"
        >
        Buku 2 - Belajar JavaScript
        </Link>

        <Link
          to="/books/3"
          className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50"
        >
        Buku 3 - Belajar React Router
        </Link>
      </div>
    </div>
  );
}

export default Books;