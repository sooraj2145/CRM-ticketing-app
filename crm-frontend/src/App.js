import EntryPage from './page/entry/Entry.page';
import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.comp';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketLists from './page/ticket-listing/TicketLists.page';
import Ticket from './page/ticket/Ticket.page';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/private-routes/PrivateRoute.comp';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
               
          <Route element ={<DefaultLayout />}>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
                <Route path="/ticket-lists" element={<PrivateRoute><TicketLists /></PrivateRoute>} />
                <Route path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
      </Route>
    </Routes>
       
       
      </Router>
    </div>
  );
}

export default App;
