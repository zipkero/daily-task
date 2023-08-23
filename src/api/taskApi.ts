import { db } from "../firebase.ts";
import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { Task } from "../types/Task.ts";

export const addTask = async (task: Task) => {
  const docRef = await addDoc(collection(db, "tasks"), task);
  return docRef.id;
};

export const getTasks = async () => {
  const docSnap = await getDocs(collection(db, "tasks"));
  return docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Task);
};

export const removeTask = async (id: string) => {
  await deleteDoc(doc(db, "tasks", id));
};

export const updateTask = async (task: Task) => {
  await updateDoc(doc(db, "tasks", task.id!), task);
};
