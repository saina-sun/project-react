import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import Layout from "./Layout";


import NewChat from "./pages/NewChat";
import SearchChat from "./pages/SearchChat";
import Images from "./pages/Images";
import Plugins from "./pages/Plugins";
import Loginpage from "./pages/Loginpage";
import Plan from "./pages/Plan";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="newchat" replace />} />
          <Route path="newchat" element={<NewChat />} />
          <Route path="SearchChat" element={<Loginpage />} />
          <Route path="images" element={<Images />} />
          <Route path="plugin" element={<Plugins />} />
          <Route path="deep-research" element={<Loginpage />} />
          <Route path="plan" element={<Plan />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;