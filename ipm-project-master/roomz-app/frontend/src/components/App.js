import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


// App Components
import Header from './Layout/Header';
import Home from './Home/Home'
import Login from './Layout/Login';
import RoomZ from './Room/RoomZ';
import NotFound from './Layout/NotFound';
import ProtectedRoute from  './ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
import { CloseButton, Fade } from './common/Toast';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <ProtectedRoute exact path='/admin' component={RoomZ}/>
          <Route component={NotFound}/>
        </Switch>
        <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </BrowserRouter>
)

export default App;
