import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Main() {
  return (
   <>
    <main>
      <NavBar />
      <Outlet />
    </main>
   </>
  );
}

export default Main;