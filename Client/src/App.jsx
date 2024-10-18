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
import AdminProfile from "./pages/AdminProfile";
import Donation from "./components/Donation";
// import ProtectedRoute from "./components/ProtectedRoutes";
// import StudentProfile from "./components/StudentProfile";
import Contact from "./components/Contact";
import Alumni from "./pages/Alumni";
import Student from "./pages/Student";

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
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/alumni",
          element: <Alumni />,
        },
        {
          path: "/profile",
          element: (
            // <ProtectedRoute>
            <Profile />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/alumnitable",
          element: (
            // <ProtectedRoute>
            <AlumniTable />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/alumnidirectory",
          element: (
            // <ProtectedRoute>
            <AlumniDirectory />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/adminprofile",
          element: (
            // <ProtectedRoute>
            <AdminProfile />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/donation",
          element: (
            // <ProtectedRoute>
            <Donation />
            // </ProtectedRoute>
          ),
        },
        // {
        //   path: "/student",
        //   element: (
        //     // <ProtectedRoute>
        //     <StudentProfile />
        //     // </ProtectedRoute>
        //   ),
        // },
        {
          path: "*",
          element: {},
        },
        {
          path: "/student",
          element: <Student />,
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
