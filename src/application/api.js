import firebase, { db } from './firebase';
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from "firebase/firestore";

export const savePersonName = (name) => {
    // !Alta de Personas  /  "C"REATE
    addDoc(collection(db, 'persons'), { name });
}

export const getPersons = async () => {
    // !Consulta de Personas /  "R"EAD
    const result = await getDocs(query(collection(db, 'persons')));
    return result;
}

export const deletePerson = async (id) => {
    // !Borrado de Personas  / "D"ELETE 
    await deleteDoc(doc(db, 'persons', id));
}
