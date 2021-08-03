import './App.css';
import Contact from './components/Contact';
import state from './components/Contacts'
import { useState } from 'react';

let id = -1;

function App() {
  const [searchItem, setSearchItem] = useState('')


  function handleSearchChange(event) {
    setSearchItem(event.target.value)
  } 

  return (
    <div className="wrapper">
      <div className="top">
        <h2>Contacts</h2>
        <input className="search" placeholder="Search..." value={state.search} onChange={handleSearchChange}/>
      </div>
      {state.contacts.filter(contact => {
        if (searchItem == "") {
          return contact
        }
        else if (
                contact.firstName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) 
                || contact.lastName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
                || contact.phone.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
              ) {
          return contact
        }
      }).map(contact => <Contact {...contact} key={id++}/>)}
    </div>
  );
}

export default App;
