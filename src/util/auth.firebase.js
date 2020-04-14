import firebase from 'firebase'
import options from './../config'
import {isEmpty } from './../util/is-empty'

firebase.initializeApp(options.firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

export const createUserProfilDocument = async (userAuth, additionalData) => {
  
  if (!userAuth) return;
  try {
    const { email, uid} =  {...userAuth};
    const userRef = firestore.collection('profils').doc(uid)
    const snapShot = await userRef.get();
      if (!snapShot.exists && !isEmpty(email)) {
        const createdAt = new Date();
        await userRef.set({
          email,
          createdAt,
          ...additionalData
        });
      } else {
        console.log(`that User ${email} `) 
        }
        return userRef;
    } catch (error) {
      console.log(error) 
    }
  };
// on envoie le nom de la collection  [selections] // et collectin 'coran / sagesse / objets ludiques / discount'
export const addCollectionAndDocuments = async (collectionKey, collections) => {
  const collectionRef = firestore.collection(collectionKey)
   const batch = firestore.batch()
   collections.forEach(object => {
     const newCollRef = collectionRef.doc(object.title)
     batch.set(newCollRef,object)  
   })
   return await batch.commit()  
}
