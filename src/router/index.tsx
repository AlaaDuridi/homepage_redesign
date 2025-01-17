import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../views/home/home.tsx';
import { Suspense, FC } from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <> Something went wrong! </>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
export default Routes;
