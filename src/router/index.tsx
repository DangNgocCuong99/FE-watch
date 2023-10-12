import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutDefault from "../layout";
import { transformRoute } from "./hook";
import Layout from "../component/layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<LayoutDefault /> }>
          {transformRoute()}
        </Route>
        <Route path="/" element={<Layout/>}/>

      </Routes>
    </BrowserRouter>
  );
}
