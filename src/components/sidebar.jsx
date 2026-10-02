import { NavLink } from 'react-router';

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-600 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        Toko Buku
      </h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className="block p-3 rounded-lg hover:bg-blue-700"
        >
        Beranda
        </NavLink>

        <NavLink
          to="/books"
          className="block p-3 rounded-lg hover:bg-blue-700"
        >
        Katalog Buku
        </NavLink>

        <NavLink
          to="/favorites"
          className="block p-3 rounded-lg hover:bg-blue-700"
        >
        Favorit
        </NavLink>

        <NavLink
          to="/help"
          className="block p-3 rounded-lg hover:bg-blue-700"
        >
        Bantuan
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;