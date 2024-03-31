import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAc1f-ut6zGeA03NoZe7kpvS4IVBNfmcf0",
  authDomain: "enviro-db8b4.firebaseapp.com",
  projectId: "enviro-db8b4",
  storageBucket: "enviro-db8b4.appspot.com",
  messagingSenderId: "787236267492",
  appId: "1:787236267492:web:2b7feec825ec13c71f13f1",
  storageBucket: "gs://enviro-db8b4.appspot.com",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app, firebaseConfig.storageBucket);

export { storage };
