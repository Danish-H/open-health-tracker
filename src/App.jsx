import './App.css';
import Card from './Components/card'
import Header from './Components/header'
import {useOidcUser, OidcUserStatus} from '@axa-fr/react-oidc';

const DisplayUserInfo = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();

  switch (oidcUserLoadingState) {
    case OidcUserStatus.Loading:
      return <p>User Information are loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
      return (
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">User information</h5>
                  <p className="card-text">{JSON.stringify(oidcUser)}</p>
                </div>
              </div>
      );
  }
};

function App() {
  return (
    <div>
      <Header name="test" pfp="profile.svg"/>
      <DisplayUserInfo></DisplayUserInfo>
      <Card bgcolor="#eee" title="This Week in a Glance">
        <p>stuff here</p>
      </Card>
      <Card bgcolor="#DDF6D7" title="How's it going?" showbg>
        <p>stuff here</p>
      </Card>
      <Card bgcolor="#D7EBF6" title="Medication Tracker" showbg>
        <p>stuff here</p>
      </Card>
    </div>
  );
}

export default App;
