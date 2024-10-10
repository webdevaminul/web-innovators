import {
  FaBell,
  FaUser,
  FaBars,
  FaHome,
  FaFileAlt,
  FaUsers,
  FaStore,
  FaExchangeAlt,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import Darkmode from "../../components/Darkmode/Darkmode"
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:px-10 px-5">
      {/* Barra de navegación superior */}
      <div className="bg-bg text-text shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
          <Link to="/">
                <h1 className="font-bold text-2xl md:text-2xl font-inter">
                  Learn<span className="text-secondary">UP</span>
                </h1>
              </Link>
          </div>
          <div className="md:hidden flex items-center">
            {" "}
            {/* Se muestra solo en dispositivos pequeños */}
            <button id="menuBtn">
              <FaBars className="text-text text-lg" /> {/* Ícono de menú */}
            </button>
          </div>
        </div>

        {/* Ícono de Notificación y Perfil */}
        <div className="space-x-5">
        <Darkmode />
          <button>
            <FaBell className="text-text text-lg" />
          </button>
          {/* Botón de Perfil */}
          <button>
            <FaUser className="text-text text-lg" />
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex">
        {/* Barra lateral de navegación (oculta en dispositivos pequeños) */}
        <div
          className="p-2 bg-bg w-60 flex flex-col hidden md:flex"
          id="sideNav"
        >
          <nav>
            <Link to="admin-home"
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
            >
              <FaHome className="mr-2" />
              Home
              </Link>
            <Link
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
              to="user-manage"
            >
              <FaUsers className="mr-2" />
              User Manage
            </Link>
            <a
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
              href="#"
            >
              <FaFileAlt className="mr-2" />
              Course Manage
            </a>
            <a
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
              href="#"
            >
              <FaStore className="mr-2" />
              Comercios
            </a>
            <a
              className="block text-text py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text"
              href="#"
            >
              <FaExchangeAlt className="mr-2" />
              Transacciones
            </a>
          </nav>

          {/* Ítem de Cerrar Sesión */}
          <a
            className="block text-text py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-text mt-auto"
            href="#"
          >
            <FaSignOutAlt className="mr-2" />
            Cerrar sesión
          </a>

          {/* Señalador de ubicación */}
          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

          {/* Copyright al final de la navegación lateral */}
          <p className="mb-1 px-5 py-3 text-left text-xs text-text">
            Copyright WCSLAT@2023
          </p>
        </div>

        {/* Área de contenido principal */}
        <div className="flex-1 p-4">
          {/* Campo de búsqueda */}
          <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 bg-bg text-base placeholder-placeholder border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Buscar..."
            />
          </div>

          {/* Contenedor de las 4 secciones */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
