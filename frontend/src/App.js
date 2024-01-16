import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Login from './components/Login';
import HackathonForm from './pages/HackathonForm';
import MainHome from './pages/MainHome';
import RegisterForm from './pages/RegisterForm';
import HackathonPage from './pages/HackathonPage'
import Error from './pages/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      // errorElement: <ErrorPage />,
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    //   // errorElement: <ErrorPage />,
    // },
    {
      path: "/registration-form",
      element: <RegisterForm />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon-form",
      element: <HackathonForm/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon",
      element: <HackathonPage/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/*",
      element: <Error/>,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
