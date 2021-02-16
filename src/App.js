import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { Route, Switch } from "react-router-dom";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <>
          <div className='login'>
            <Login />
          </div>
          <div className='mobile__view'>
            This Web App Only Build for Desktop size screen
          </div>
        </>
      ) : (
        <>
          <div className='app__body'>
            <Sidebar />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/:roomId' component={Chat} />
            </Switch>
          </div>
          <div className='mobile__view'>
            This Web App Only Build for Desktop size screen
          </div>
        </>
      )}
    </div>
  );
}

export default App;
