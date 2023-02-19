  import './App.css';
  import Card from './Components/card'
  import Header from './Components/header'

  function App() {
    return (
      <div id="root">
        <Header name="Faish" pfp="profile.svg"/>
        <Card color="#e9fae4" bgcolor="#DDF6D7" title="Hows it going?">
          <p>stuff here</p>
        </Card>
      </div>
    );
  }

  export default App;
