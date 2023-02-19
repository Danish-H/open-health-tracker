  import './App.css';
  import Card from './Components/card'

  function App() {
    return (
        <div id="root">
        <div id="header">
          <h1><span class="gray">Hello</span> Faish!</h1>
          <img id="profile" src="profile.svg" alt="profile"></img> 
        </div>
        <Card color="#e9fae4" bgcolor="#DDF6D7" title="Hows it going?">
          <p>stuff here</p>
        </Card>
      </div>
    );
  }

  export default App;
