import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div>
      <div style={{  backgroundColor: '#c8dbca', textAlign: 'center', fontWeight: "bold" }}>
        Navigation
      </div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
