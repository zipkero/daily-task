import { db } from "../firebase.ts";
import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { Task } from "../types/Task.ts";

export const insertTask = async (task: Task) => {
  const docRef = await addDoc(collection(db, "tasks"), task);
  return docRef.id;
};

export const getTaskAll = async (dateKey: string) => {
  const q = query(collection(db, "tasks"), where("createdAt", "==", dateKey));
  const docSnap = await getDocs(q);
  return docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Task);
};

export const removeTask = async (id: string) => {
  await deleteDoc(doc(db, "tasks", id));
};

export const updateTask = async (task: Task) => {
  await updateDoc(doc(db, "tasks", task.id!), task);
};
