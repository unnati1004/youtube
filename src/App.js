import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import {Provider} from "react-redux";
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { MainContainer } from './Component/MainContainer';
import { WatchPage } from './Component/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children:[
   { path:"/",
    element: <MainContainer/>
  },
  {
    path: "watch",
    element:<WatchPage/>,
  },
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div >
      <Head/>
       <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
