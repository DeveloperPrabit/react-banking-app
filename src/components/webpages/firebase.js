import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSqgOdoAoOjrOMIaj_pUuPPKSNCBYlhnQ",
  authDomain: "backendapp-e7687.firebaseapp.com",
  projectId: "backendapp-e7687",
  storageBucket: "backendapp-e7687.appspot.com",
  messagingSenderId: "816345679495",
  appId: "1:816345679495:web:028109be772a9238419a22",
  measurementId: "G-V06R8ZM8LN"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email:email, accountno: accountno, balance: balance });
};

export const addTransaction = ( receiver, sender, amount) => {
  return db
    .collection("transactions")
    .add({ receiver: receiver, sender: sender, amount: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
  //firebase.initializeApp(firebaseConfig);
  //export default firebase
