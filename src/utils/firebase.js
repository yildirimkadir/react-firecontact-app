// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, push, set, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AddUser = (list)=> {
    const db = getDatabase(app);
    const userRef = ref(db, "users/");
    const newUserRef = push(userRef);
    set(newUserRef, {
    username: list.userName,
    phone: list.phone,
    gender: list.gender
   
});

}

export const useFetch=()=>{
     const [isLoading,setIsLoading]=useState();
     const [contactList,setContactList]=useState();
    useEffect(() => {
        const db = getDatabase(app);
        const userRef=ref(db,"users/")
        onValue(userRef,(snapshot)=>{
            const data=snapshot.val();
            const userArray=[]

            for (let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray)
            setIsLoading(false)
        })
    },[])
    return {isLoading,contactList}
}

export const deleteUser=(id)=>{
    const db = getDatabase(app);
    remove(ref(db,"users/"+id));
}

export const UpdateUser=(list)=>{
    const db = getDatabase(app);
    const updates={}
    updates["users/"+list.id]=list

    return update(ref(db),updates)

}

