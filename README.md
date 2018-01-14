# NoteDown
## Summary
A note-taking web app built using ReactJS that lets users save their notes and view them afterwards, with the notes being stored in Firebase.

## Setup
You'll need to get your connection strings from Firebase. Place a file called `config.js` in `src/Config/` that contains your Firebase config as a simple javascript object, exported as `DB_CONFIG`. For example,

```
export const DB_CONFIG ={
  apiKey: your_api_key,
  authDomain: your_auth_domain,
  // etc..
}
```

## Starting the app
`npm start`



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
