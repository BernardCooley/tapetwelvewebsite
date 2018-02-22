// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBC8OnaKPlz2wbOOveuya4KBmPGRQvoPoQ",
    authDomain: "tapetwelvewebsite.firebaseapp.com",
    databaseURL: "https://tapetwelvewebsite.firebaseio.com",
    projectId: "tapetwelvewebsite",
    storageBucket: "tapetwelvewebsite.appspot.com",
    messagingSenderId: "291319804914"
  },
  firestore: {
    apiKey: "AIzaSyBdFG1-71esSHx00iFJG1YJkfmVvq8I6v8",
    authDomain: "tapetwelve-96ba1.firebaseapp.com",
    databaseURL: "https://tapetwelve-96ba1.firebaseio.com",
    projectId: "tapetwelve-96ba1",
    storageBucket: "tapetwelve-96ba1.appspot.com",
    messagingSenderId: "193344208379"
  }
};

