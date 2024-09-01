import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './Component/Body';
import Head from './Component/Head';
import {MainContainer} from './Component/MainContainer';
import {WatchPage} from './Component/WatchPage';
import { Demo } from './Component/Demo';
import { Demo2 } from './Component/Demo2';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage/> },
      {
        path:"/demo",
        element:<Demo/>
      },
      {
        path:"/demo2",
        element:<Demo2/>
      }
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