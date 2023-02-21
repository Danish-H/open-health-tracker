import './App.css';
import Card from './Components/card'
import Header from './Components/header'
import {useOidcUser, OidcUserStatus} from '@axa-fr/react-oidc';
import EmojiButtons from './Components/emoji-buttons';
import { GetJournalSummary } from './api.jsx'
import React, { useState } from 'react';

function App() {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  const [summary, setSummary] = useState({emotions: []});
  switch (oidcUserLoadingState) {
    case OidcUserStatus.Loading:
      return <p>User Information loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
        
        GetJournalSummary().then(result => {setSummary(result)});
        return (
          <div>
            <Header name={oidcUser.given_name} pfp="profile.svg"/>
            <Card bgcolor="#eee" title="This Week in a Glance">
              <p>stuff here</p>
            </Card>
            <Card bgcolor="#DDF6D7" title="How's it going?" showbg>
              <EmojiButtons emotions={summary.emotions}/>
            </Card>
            <Card bgcolor="#D7EBF6" title="Medication Tracker" showbg>
              <p>stuff here</p>
            </Card>
          </div>
        );
  }
}

export default App;
