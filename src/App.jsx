import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Header + Footer
import Header from "./Header";
import Footer from "./Footer";

// NavLinks as User
import Home from "./components/Home";
import JeepneyInfo from "./components/JeepInfo";
import Terminal from "./components/Terminal";
import AdminPanel from "./components/AdminPanel";

// NavLinks as Admin
import AdminInfo from "./admin/AdminInfo";
import AdminTerminal from "./admin/AdminTerminal";
import AdminHeader from "./admin/AdminHeader";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin on component mount
    const storedIsAdmin = localStorage.getItem("isAdmin");
    if (storedIsAdmin) {
      setIsAdmin(JSON.parse(storedIsAdmin));
    }
  }, []);

  const adminRoutes = (
    <>
      <Route path="/" element={<Navigate to="AdminJeepney" />} />
      <Route path="/AdminJeepney" element={<AdminInfo />} />
      <Route path="/AdminTerminal" element={<AdminTerminal />} />
    </>
  );

  return (
    <Router basename="">
      {isAdmin ? <AdminHeader setIsAdmin={setIsAdmin} /> : <Header />}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeepney" element={<JeepneyInfo />} />
        <Route path="/terminal" element={<Terminal />} />
        {isAdmin ? (
          adminRoutes
        ) : (
          <Route
            path="/admin"
            element={<AdminPanel setIsAdmin={setIsAdmin} />}
          />
        )}
      </Routes>
      {!isAdmin && <Footer />}
    </Router>
  );
};

export default App;
