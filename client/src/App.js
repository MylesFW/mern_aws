import logo from './logo.svg';
import './App.css';
import {Router, Redirect} from '@reach/router'

import Pets from './views/Pets'
import Pet from './views/Pet'
import NewPet from './views/NewPet'
import EditPet from './views/EditPet'
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <h1  style={{textAlign: 'left', marginLeft: '10%'}}>Pet Shelter</h1>

      <div>
        <Router>
          <Pets path="/" />
          <NewPet path="/pets/new" />
          <Pet path="/pets/:id" />
          <EditPet path="/pets/:id/edit" />
          <Redirect from="/" to="/" noThrow="true" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
}

export default App;
