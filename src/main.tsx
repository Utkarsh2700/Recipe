import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Router from "./router/Router.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Router />}>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Route>,
  ])
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
