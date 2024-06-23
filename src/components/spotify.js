//throw the user to spotify to login
export const authEndpoint = "https://accounts.spotify.com/authorize";
// then redirect back to localhost (well to my app)
const redirectUri = "https://spotify-clone-react-js-alpha.vercel.app/"; //"http://localhost:3000/";

// Client ID from Spotify Developer Dashboard
// no worries it's public ;)
const clientId = "2d60dfa9fe4441e19cd06b60aedf7704";

const scopes = [
  // What user can do with the app (correct permissions).
  // The user will be prompted to give permission based on the following scopes.
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  //http://localhost:3000/   --->[#]<--   access_token=BQD96t....OAQNs&token_type=Bearer&expires_in=3600
  //go to the url and find the hash
  return window.location.hash
    .substring(1) // remove the first character '#'
    .split("&") //get queries from the hash separated by '&'
    .reduce((initial, item) => {
      // Example of item : access_token=BQD96t....OAQNs
      let parts = item.split("=");
      //for accessToken decode its value
      if (parts[0] && parts[1])
        initial[parts[0]] = decodeURIComponent(parts[1]);
      console.log({
        initial,
      });
      return initial;
    }, {});
};

// prepare the login url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
