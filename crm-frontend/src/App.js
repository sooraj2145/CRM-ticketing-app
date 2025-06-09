import EntryPage from './page/entry/Entry.page';
import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './page/dashboard/Dashboard.comp';
import AddTicket from './page/new-ticket/AddTicket.page';
import TicketLists from './page/ticket-listing/TicketLists.page';
import Ticket from './page/ticket/Ticket.page';
import './App.css';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
        {/* <EntryPage /> */}
        </DefaultLayout>
      {/* <EntryPage /> */}
      
    </div>
  );
}

export default App;
