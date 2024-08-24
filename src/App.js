import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './Component/Body';
import Head from './Component/Head';
import {MainContainer} from './Component/MainContainer';
import {WatchPage} from './Component/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage/> },
    ],
  },
]);

function App() {
  return (
   
      <div>
        <Head />
        {/* <Body/> */}
        <RouterProvider router={appRouter} />
      </div>

  );
}

export default App;