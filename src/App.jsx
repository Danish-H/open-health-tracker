import './App.css';
import Card from './Components/card'
import Header from './Components/header'
import {useOidcUser, OidcUserStatus} from '@axa-fr/react-oidc';
import { GetJournalSummary } from './api.tsx'
import React, { useEffect, useState } from 'react';
import EmojiButton from './Components/emoji-button';
import Slideup from './Components/Slideup';
import { Screens } from "./screens.ts"
import EmotionCategory from './Components/EmotionCategory';

function App() {
  const [summary, setSummary] = useState({emotionCategories: []});
  const [screen, setScreen] = useState(Screens.Home);
  useEffect(() => {
    GetJournalSummary().then(result => {setSummary(result)});
  }, [])
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  switch (oidcUserLoadingState) {
    case OidcUserStatus.Loading:
      return <p>User Information loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
      console.log(summary)
        return (
          <div style={{position:'relative'}}>
            <div id='home'>
            <Header name={oidcUser.given_name} pfp="profile.svg"/>
            <Card bgcolor="#eee" title="This Week in a Glance">
              <p>stuff here</p>
            </Card>
            <Card onClick={() => {setScreen(Screens.Journal)}} bgcolor="#DDF6D7" title="How's it going?" showbg>
              <div>
              {summary.emotionCategories.length > 0 && summary.emotionCategories.filter(x => x.default)[0].emotions.map(x => {
                return <EmojiButton onClick={() => {setScreen(Screens.Journal)}} src={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" + x.icon + ".svg"}/>
              }).reverse()}
              </div>
            </Card>
            <Card bgcolor="#D7EBF6" title="Medication Tracker" showbg>
              <p>stuff here</p>
            </Card>
          </div>
          <Slideup onClose={() => {setScreen(Screens.Home)}} shown={screen === Screens.Journal}>
            <EmotionCategory name="Overall Mood"></EmotionCategory>
          </Slideup>
          </div>
        );
  }
}

export default App;
