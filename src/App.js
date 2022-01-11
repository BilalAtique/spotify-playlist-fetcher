import SearchForm from './SearchForm';
import UserPlaylist from './UserPlaylist';
import AuthorizeAccess from './AuthorizeAccess';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthorizeOrNot from './AuthorizeOrNot';


function App() {

  const clientId = '484e634d46d448a086e70bc87b8cdeae';
  const clientSecret = '34b5c5fcf20841cc9e8c813cf12eaf26';
  const redirect_uri = "http://localhost:3000";
  const GENRES = `https://api.spotify.com/v1/browse/categories`;
  const GENRESBYID = `https://api.spotify.com/v1/browse/categories/{{genreId}}/playlists?limit={{limit}}`;
  const PLAYLISTS = 'https://api.spotify.com/v1/me/playlists';
  const accessToken = localStorage.access_token;
  // document.title = "Spotify App";

  return (
    <Router>
      <div className="App">
            <AuthorizeAccess clientId={clientId} clientSecret={clientSecret} redirectUri={redirect_uri} />
            <AuthorizeOrNot access_token={accessToken} />
        <Switch path="/">
          <Route exact path="/">
            <SearchForm access_token={accessToken} GENRESBYID={GENRESBYID} GENRES={GENRES} />
          </Route>
          <Route path="/user-playlist">
            <UserPlaylist access_token={accessToken} PLAYLISTS={PLAYLISTS} />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
