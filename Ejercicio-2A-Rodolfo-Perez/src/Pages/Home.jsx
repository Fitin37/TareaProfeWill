import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Boton";
import ButtonDelete from "../components/DeleteButton";
import useFetchUsers from "../hooks/Products/UseFecthProduct";
import { optionSelect } from "../utils/apiUrl";
import useUserActions from "../hooks/Products/UseProductActions";

const Home = () => {

  const { users, getUsers } = useFetchUsers();
  const {deleteUser, handleUpdateUser} = useUserActions(getUsers)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar Producto
      </Link>

      <Titulo titulo="Informacion de productos" />

      <p className="mt-1 text-sm text-gray-600 mb-4">
        Lista de Productos registrados.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">id</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Precio</th>
              <th className="px-4 py-2 border-b">Categoria</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.stock}</td>
                <td className="px-4 py-2">{user.precio }</td>
                <td className="px-4 py-2">
                  {optionSelect.find((opt) => opt.value === user.categoria)
                  ?.label || "Sin asignar"}
                </td> 
                <td>
                  <Button text="Editar" 
                  onClick={() => handleUpdateUser(user.id)}
                  />
                  <ButtonDelete text="Eliminar" 
                  onClick={() => deleteUser(user.id)}
                  />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
