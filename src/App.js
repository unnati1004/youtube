import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import {Provider} from "react-redux";
import store from './utils/store';
function App() {
  return (
    <div >
      <Head/>
      <Body/>
    </div>
  );
}

export default App;
