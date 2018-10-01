// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBsg1TnNWl-qwVTks5ohE58eI0YMXFWFzI',
    authDomain: 'arpit-real-time-chat-app.firebaseapp.com',
    databaseURL: 'https://arpit-real-time-chat-app.firebaseio.com',
    projectId: 'arpit-real-time-chat-app',
    storageBucket: 'arpit-real-time-chat-app.appspot.com',
    messagingSenderId: '386017060366'
  }
};
