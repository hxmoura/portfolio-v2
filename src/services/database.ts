import { db } from "@/db/firebaseClient";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

const database = {
  async getCollection(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },

  async createDocument<T extends DocumentData>(
    collectionName: string,
    data: T
  ) {
    delete data.id;

    await addDoc(collection(db, collectionName), data);
  },

  async updateDocument<T extends DocumentData>(
    collectionName: string,
    documentId: string,
    data: T
  ) {
    delete data.id;

    await setDoc(doc(db, collectionName, documentId), data);
  },

  async deleteDocument(collectionName: string, documentId: string) {
    await deleteDoc(doc(db, collectionName, documentId));
  },

  listenColletionUpdate<T>(
    collectionName: string,
    callback: React.Dispatch<React.SetStateAction<T[]>>
  ) {
    return onSnapshot(collection(db, collectionName), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as T[];

      callback(data);
    });
  },
};

export default database;
