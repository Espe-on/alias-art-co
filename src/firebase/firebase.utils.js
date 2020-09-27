import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDxRRKB-Vd9nn9ehVwoKcXsXs1qhmQJrAE",
    authDomain: "alias-art-co-db.firebaseapp.com",
    databaseURL: "https://alias-art-co-db.firebaseio.com",
    projectId: "alias-art-co-db",
    storageBucket: "alias-art-co-db.appspot.com",
    messagingSenderId: "138228944882",
    appId: "1:138228944882:web:c6ec24025efe472b1ca56b",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection((collectionKey))
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollections = collectionsSnapshot.docs.map(doc => {
      const {title, items} = doc.data();
      return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
      }});
     return transformedCollections.reduce((accumulator, collection) => {
         accumulator[collection.title.toLowerCase()] = collection;
         return accumulator;
     }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
