import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyAO8AJH-y8bULHIiBUoS41GcUJidZIn98Y",
//     authDomain: "corona-live.firebaseapp.com",
//     databaseURL: "https://corona-live.firebaseio.com",
//     projectId: "corona-live",
//     storageBucket: "corona-live.appspot.com",
//     messagingSenderId: "786747585008",
//     appId: "1:786747585008:web:1c351458733432bf97ed35",
//     measurementId: "G-E96JGVDVMN"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCZvzxlm_6W1AJNJTFJEyRRmofVgkUovjY",
    authDomain: "corona-aaa3e.firebaseapp.com",
    databaseURL: "https://corona-aaa3e.firebaseio.com",
    projectId: "corona-aaa3e",
    storageBucket: "corona-aaa3e.appspot.com",
    messagingSenderId: "776968831238",
    appId: "1:776968831238:web:d3950ece6676509e24de87",
    measurementId: "G-3E13Y4J9K3"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
