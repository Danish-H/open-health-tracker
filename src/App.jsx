  import './App.css';
  import Card from './Components/card'
  import Header from './Components/header'

  function App() {
    return (
      <div id="root">
        <Header name="Faish" pfp="profile.svg"/>
        <Card bgcolor="#eee" title="This Week in a Glance">
          <p>stuff here</p>
        </Card>
        <Card bgcolor="#DDF6D7" title="How's it going?">
          <p>stuff here</p>
        </Card>
        <Card bgcolor="#D7EBF6" title="Medication Tracker">
          <p>stuff here</p>
        </Card>
      </div>
    );
  }

  export default App;
