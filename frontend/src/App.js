import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Login from './components/Login';
import HackathonForm from './pages/HackathonForm';
import MainHome from './pages/MainHome';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/registration-form",
      element: <Register />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/hackathon-form",
      element: <HackathonForm/>,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
