import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/Form";
import Profile from "./components/Profile";
import AlumniTable from "./components/AlumniTable";
import AlumniDirectory from "./components/AlumniDirectory";
import AdminProfile from "./components/AdminProfile";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <Form />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/alumnitable",
          element: <AlumniTable />,
        },
        {
          path: "/alumnidirectory",
          element: <AlumniDirectory />,
        },
        {
          path: "/adminprofile",
          element: <AdminProfile />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
