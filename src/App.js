  import './App.css';
  import Card from './Components/card'

  function App() {
    return (
        <div id="root">
        <div id="header">
          <h1><span class="gray" alt="profile">Hello</span> Faish!</h1>
          <img id="profile" src="profile.svg"></img>
          <Card color="#DDF6D7" title="Hows it going?">
            <p>stuff here</p>
          </Card>
        </div>
      </div>
    );
  }

  export default App;
