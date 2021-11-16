import { db } from './firebase';
import {collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc} from "firebase/firestore";

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
    // !Baja de Personas  / "D"ELETE 
    await deleteDoc(doc(db, 'persons', id));
}


export const updatePerson = async (id, name) => {
    // !Actualización de Personas  / "U"PDATE 
    await updateDoc(doc(db, 'persons', id), { name });
}
