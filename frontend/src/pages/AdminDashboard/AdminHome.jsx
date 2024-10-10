import { Link } from "react-router-dom";
import Heading from "../../utils/Heading";

const AdminHome = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2">
          <Heading heading={"Admin Home"} />
            {/* Sección 1 - Gráfica de Usuarios */}
            <div className="bg-bg p-4 rounded-md">
              <h2 className="text-text text-lg font-semibold pb-1">
                Usuarios
              </h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <div
                className="chart-container"
                style={{ position: "relative", height: "150px", width: "100%" }}
              >
                <canvas id="usersChart"></canvas>
              </div>
            </div>

            {/* Sección 2 - Gráfica de Comercios */}
            <div className="bg-bg p-4 rounded-md">
              <h2 className="text-text text-lg font-semibold pb-1">
                Comercios
              </h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <div
                className="chart-container"
                style={{ position: "relative", height: "150px", width: "100%" }}
              >
                <canvas id="commercesChart"></canvas>
              </div>
            </div>

            {/* Sección 3 - Tabla de Autorizaciones Pendientes */}
            <div className="bg-bg p-4 rounded-md">
            <Link to="/">
                <h1 className="font-bold text-2xl md:text-2xl font-inter">
                  Learn<span className="text-secondary">UP</span>
                </h1>
              </Link>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Foto
                    </th>
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Nombre
                    </th>
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Rol
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-bg">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 text-text border-b border-grey-light">
                      Juan Pérez
                    </td>
                    <td className="py-2 px-4 text-text border-b border-grey-light">
                      Comercio
                    </td>
                  </tr>
                  {/* More rows can be added similarly */}
                </tbody>
              </table>
              {/* Botón "Ver más" */}
              <div className="text-right mt-4">
                <button className="bg-secondary hover:bg-primary text-text font-semibold py-2 px-4 rounded">
                  Ver más
                </button>
              </div>
            </div>

            {/* Sección 4 - Tabla de Transacciones */}
            <div className="bg-bg p-4 rounded-md mt-4">
              <h2 className="text-text text-lg font-semibold pb-4">
                Transacciones
              </h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Nombre
                    </th>
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Fecha
                    </th>
                    <th className="py-2 px-4 bg-bg font-bold uppercase text-sm text-text border-b border-grey-light">
                      Monto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 text-text border-b border-grey-light">
                      Carlos Sánchez
                    </td>
                    <td className="py-2 px-4 text-text border-b border-grey-light">
                      27/07/2023
                    </td>
                    <td className="py-2 px-4 text-text border-b border-grey-light text-right">
                      $250.00
                    </td>
                  </tr>
                  <tr className="hover:bg-bg">
                    <td className="py-2 px-4 border-b border-grey-light">
                      Ana Rodríguez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      28/07/2023
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">
                      $150.00
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Botón "Ver más" */}
              <div className="text-right mt-4">
                <button className="bg-secondary hover:bg-primary text-text font-semibold py-2 px-4 rounded">
                  Ver más
                </button>
              </div>
            </div>
          </div>
    );
};

export default AdminHome;