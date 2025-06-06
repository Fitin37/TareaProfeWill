import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import useUserAction from "./UseProductActions";

const useFetchUsers = () => {

    const [users, setUsers] = useState([]);
    const {deleteUser, handleUpdateUser} = useUserAction();


    const getUsers = async () => {
        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching users");
            }
            const data = await response.json();
            setUsers(data);

        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Error fetching users");

        }
    }

    const getUserById = async (id) => {

        try {

          const response = await fetch(`${url}/${id}`);
          if (!response.ok) {
            console.log("Failed to fetch user");
            throw new Error("Failed to fetch user");
          }
          const data = await response.json();
          return data;

        } catch (error) {
          console.error("Error fetching user:", error);
          console.log("Failed to fetch user");
          return null;
        }
      };

    useEffect(() => {
        getUsers();
    }, []);

    return {
        users,
        getUsers,
        getUserById

    }
}

export default useFetchUsers;