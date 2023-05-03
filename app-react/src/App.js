import logo from './logo.svg';
import './App.css';

//import React from 'react';

import * as React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur la gestion de ticket d'assistance !</h1>
    </div>
  );
}

function Button ({type, children}) {
  const className ='btn btn-' + type
  return <button className={className}>{children}</button>
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

// permet de creer un ticket (titre, description)
class CreerTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('Le ticket a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <label>
          Titre :
          <input type="text" value={this.state.value} onChange={this.handleChange} required minlength="1" maxlength="100" />       
          Description :
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
        </label>
        <input type="submit" value="Envoyer le ticket" />
      </form>
    );
  }
}

// change le statut
function Statut() {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };

  return (
    <div>
      <p>Statut du ticket</p>
      <Checkbox
        label="A faire"
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <Checkbox
        label="En cours"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
      <Checkbox
        label="Terminé"
        value={checkedThree}
        onChange={handleChangeThree}
      />
    </div>
  );
}

// modifier le tire du ticket
function ModificationTitre() {
  return (
    <div>
      <Button type="primary">Modifier le titre</Button>
    </div>
  );
}

// modifier la description du ticket
function ModificationDescription() {
  return (
    <div>
      <Button type="primary">Modifier la description</Button>
    </div>
  );
}


// visualiser les tickets
function MesTickets() {
  return (
    <div>
      <Button type="primary">Mes ticket(s)</Button>
    </div>
  );
}

// suppression du ticket si statut != terminé
function SuppressionTicket() {
  return (
    <div>
      <Button type="primary">Supprimer ticket</Button>
    </div>
  );
}

export default App;
