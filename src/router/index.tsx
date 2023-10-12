import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutDefault from "../layout";
import { transformRoute } from "./hook";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault /> }>
          {transformRoute()}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
