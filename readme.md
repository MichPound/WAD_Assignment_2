# Assignment 2 - Web API.

Name: Michael Pound, 20085540

Predecessor to this assignment can be found [here](https://github.com/MichPound/WAD_Assignment_1).


## Features.
 
 + Feature 1 - Now upcomingMovies, nowPlayingMovies, popularMovies and similarMovies have all been added to the API
 + Feature 2 - Now upcomingMovies, nowPlayingMovies and popularMovies have all are stored within a mongo database
 + Feature 3 - Each user has their own favourites list implemented that they can add movies to
 + Feature 4 - Each user has their own watch list implemented that they can add upcoming movies to
 + Feature 5 - Movie reviews, credits and details are handled through the API

## Installation Requirements
# To clone my repository use:
 + git clone https://github.com/MichPound/WAD_Assignment_2

# Installation commands used during this assignment:
 + npm i --save bootstrap@4.4.1        
 + npm i --save-dev babel-cli      
 + npm i --save-dev babel-preset-env      
 + npm i --save-dev nodemon        
 + npm i --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
 + npm i --save dotenv express   
 + npm i -s node-fetch      
 + npm i -save mongoose          
 + npm i --save express-session
 + npm i --save passport passport-jwt jsonwebtoken bcrypt-nodejs
 + npm i --save @fortawesome/react-fontawesome
 + npm i --save @fortawesome/free-solid-svg-icons
 + npm i --save @fortawesome/fontawesome-svg-core
 + npm i react-scripts   
 + npm i bootstrap react-bootstrap
 + npm i react-hook-form
 + npm i firebase
 + npm i @react-firebase/auth


## API Configuration
A .env file is needed,this will contain your own TMDB API key, the port your API is running on and your mongo database.

```bat
NODE_ENV=development
PORT=8085
HOST=localhost
TMDB_KEY="your own key"
mongoDB=mongodb://localhost:27017/"your mongo db"
MONGO_DB=mongodb://localhost:27017/"your mongo db"
SEED_DB=true
SECRET=ilikecake
```

Optionally this asingment has firebase capabilites, this however will store the users on firebase not locally so a database would need to be set up to store the users favouites and watchlist. The code is all included just need to be uncommented.
You will need to set up an account and project on firebase and enter your details in the format below, this will replace firebase,js in the react app.

```bat
import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "APP_FIREBASE_API_KEY",
    authDomain: "APP_FIREBASE_AUTH_DOMAIN",
    projectId: "APP_FIREBASE_PROJECT_ID",
    storageBucket: "APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "APP_FIREBASE_MESSAGING_SENDER_ID",
    appId: "APP_FIREBASE_APP_ID",
    measurementId: "APP_FIREBASE_MEASUREMENT_ID"
})

export const auth = app.auth()
export default app
```

## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A | N/A |
| /api/movies/{movieid} | Gets a Movies details | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A  
| /api/movies/{movieid}/credits | Get all credit cast members for a movie | N/A | N/A | N/A
| /api/nowPlayingMovies | Gets a list of now playing movies | N/A | N/A | N/A |
| /api/popularMovies | Gets a list of popular movies | N/A | N/A | N/A |
| /api/popularMovies/{movieid}/similarMovies | Gets a list of similar movies to movie id | N/A | N/A | N/A |
| /api/upComingMovies | Gets a list of upcoming movies | N/A | N/A | N/A |
| /api/users | N/A | Allows user to login | N/A | N/A |
| /api/users?action=register | N/A | Allows user to register | N/A | N/A |
| /api/users/${userName}/favourites | Gets users favourites | adds movie to users favourites | N/A | N/A |
| /api/users/${userName}/watchList | Gets users watch list | adds movie to users watch list | N/A | N/A |
| /api/genres | Gets movie genres | N/A | N/A | N/A |


## Security and Authentication
This application uses passport with sessions to authenticate users. The user will have to register an account with a name and password. This will then be stored in mongo using a modified schema for users giving them both favourites and wacthlists. Once the user has registered they will be able to login, if the user is not loged in they can only view the login and register pages, once they are logged in they can see all pages.

 + /login (public) - Displays login page for existing users to log in.
 + /signup (public) - Displays signup page for users who do not have accounts yet.

 + /reviews/form (private) - Displays review form for a selected movie if user is logged in.
 + /reviews/:id (private) - Displays full review for a selected movie if user is logged in.
 + /movies/favorites (private) - Displays the users favourite movies  if user is logged in.
 + /movies/upcoming (private) - Displays upcoming movies  if user is logged in.
 + /movies/:id/similar (private) - Displays similar movies for a selected movie if user is logged in.
 + /movies/popular (private) - Displays popular movies if user is logged in.
 + /movies/now_playing (private) - Displays now playing movies if user is logged in.
 + /watchList (private) - Displays the users watch list if user is logged in.
 + /movies/:id (private) - Displays movie details for a selected movie if user is logged in.
 + / (private) - Displays home page of app.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.


The only content in this assingment that was not covered in the labs is the authentication using Firebase. This means user have to sign up to be able to access any view besides the signup and register views. Firebase handles the data for all users signed up to the movie app.

![][fireBase]

### Sites used for implementing authentication using Firebase: 
+ https://react-firebase-js.com/docs/react-firebase-auth/getting-started
+ https://blog.logrocket.com/user-authentication-firebase-react-apps/
+ https://www.youtube.com/watch?v=PKwu15ldZ7k
+ https://levelup.gitconnected.com/authentication-using-firebase-and-react-js-99392c6fa58b

---------------------------------

[fireBase]: ./public/fireBase.png
