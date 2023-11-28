import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Board from "./Board";
export default function Home() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user == null || !auth.currentUser) {
      // redirect to login page
      navigate("/");
    }
  }, []);

  return (
    <div>
      {auth.currentUser ? (
        <div>
          <h3>Welcome in Tic Tac Toe</h3>
          <button onClick={logout}>Logout</button>
          <Board />
        </div>
      ) : (
        <h1>Rdirecting to login page</h1>
      )}
    </div>
  );
}
