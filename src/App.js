import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";


import NewChat from "./pages/NewChat";
import SearchChat from "./pages/SearchChat";
import Images from "./pages/Images";
import Plugins from "./pages/Plugins";
import DeepSearch from "./pages/DeepSearch";
import Plan from "./pages/Plan";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="newchat" element={<NewChat />} />
          <Route path="SearchChat" element={<SearchChat />} />
          <Route path="images" element={<Images />} />
          <Route path="plugin" element={<Plugins />} />
          <Route path="deep-research" element={<DeepSearch />} />
          <Route path="plan" element={<Plan />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;