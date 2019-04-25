import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import PicComponent from './picComponent';
import Error404 from './Error404';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <Route component={Error404} />
      <PicComponent/>
    </div>
  );
}

export default App;
