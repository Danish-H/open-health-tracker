import './App.css';
import Card from './Components/card'
import Header from './Components/header'
import {useOidcUser, OidcUserStatus} from '@axa-fr/react-oidc';
import { GetJournalSummary } from './api.tsx'
import React, { useEffect, useState } from 'react';
import EmojiButton from './Components/emoji-button';
import MedicationButton from './Components/medication-button';
import Slideup from './Components/Slideup';
import { Screens } from "./screens.ts"
import EmotionCategory from './Components/emotion-category';
import Activities from './Components/activities';
import PillMenu from './Components/pill-menu';

function App() {
  const [summary, setSummary] = useState({emotionCategories: [], activities: []});
  const [screen, setScreen] = useState(Screens.Home);
  const defaultJournalState = {emotions: {}, activities: []};
  const [journalState, setJournalState] = useState(defaultJournalState);
  const [journalEditMode, setJournalEditMode] = useState(false);
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
            <Header name={oidcUser.given_name} pfp="profile-circle.svg"/>
            <Card bgcolor="#eee" title="This Week in a Glance">
              <p>stuff here</p>
            </Card>
            <Card onClick={() => {setJournalState({defaultJournalState}); setScreen(Screens.Journal)}} bgcolor="#DDF6D7" title="How's it going?" showbg>
              <div>
              {summary.emotionCategories.length > 0 && summary.emotionCategories.filter(x => x.default)[0].emotions.map(x => {
                return <EmojiButton onClick={() => {setJournalState({...defaultJournalState, emotions: {[summary.emotionCategories.filter(x => x.default)[0].id]: [x.id]}}); setScreen(Screens.Journal)}} src={x.icon}/>
              })}
              </div>
            </Card>
            <Card bgcolor="#D7EBF6" title="Medication Tracker" showbg>
              {/* These are just temporary placeholders for medications */}
              <MedicationButton name="Acrinintol" time="12:30pm" />
              <MedicationButton name="Enzatrope" time="6:30pm" />
            </Card>
          </div>
          <Slideup onClose={() => {setScreen(Screens.Home)}} shown={screen === Screens.Journal}>
            <h2>How are you doing today?</h2>
            {summary.emotionCategories.map(x => {
              return <EmotionCategory 
              name={x.name} 
              emotions={x.emotions} 
              allowMultiple={x.allowMultiple} 
              id={x.id}
              journalState={journalState}
              updateJournalState={setJournalState}/>
            })}
            <h2>What have you been up to?</h2>
            <Activities 
            activities={summary.activities}
            journalState={journalState}
            updateJournalState={setJournalState}
            ></Activities>
            <PillMenu
            primaryLabel={journalEditMode ? 'Save' : 'Done'}
            secondaryColor={journalEditMode ? '#252525' : '#FFFFFF'}
            secondaryLabel={journalEditMode ? 'Cancel' : 'Edit Mode'}
            dropShadow={!journalEditMode}
            secondaryClick={() => {setJournalEditMode(!journalEditMode)}}
            />
          </Slideup>
          </div>
        );
  }
}

export default App;
