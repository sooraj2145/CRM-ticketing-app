import EntryPage from './page/entry/Entry.page';
import React from 'react';
import DefaultLayout from './layout/DefaultLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        send the page component
        </DefaultLayout>
      {/* <EntryPage /> */}
      
    </div>
  );
}

export default App;
