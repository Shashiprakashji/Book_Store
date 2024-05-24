import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      // document.getElementById("my_modal_3").close();

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
