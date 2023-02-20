  import './App.css';
  import Card from './Components/card'
  import Header from './Components/header'
  import EmojiButton from './Components/emoji-button';

  function App() {
    return (
      <div id="root">
        <Header name="Faish" pfp="profile.svg"/>
        <Card bgcolor="#eee" title="This Week in a Glance">
          <p>stuff here</p>
        </Card>
        <Card bgcolor="#DDF6D7" title="How's it going?" showbg>
          <div>
            {/* These are just examples */}
            <EmojiButton src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f604.svg"></EmojiButton>
            <EmojiButton src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f605.svg"></EmojiButton>
            <EmojiButton src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f606.svg"></EmojiButton>
            <EmojiButton src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f607.svg"></EmojiButton>
            <EmojiButton src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f608.svg"></EmojiButton>
          </div>
        </Card>
        <Card bgcolor="#D7EBF6" title="Medication Tracker" showbg>
          <p>stuff here</p>
        </Card>
      </div>
    );
  }

  export default App;
