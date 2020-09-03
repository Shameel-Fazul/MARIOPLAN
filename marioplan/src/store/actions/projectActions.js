// ACTION CREATORS - COMES IN HANDY WHEN DEALING WITH A LOT OF DIPATCHES

import thunk from "redux-thunk";

// WHAT WE NORMALLY DO WITH ACTION CREATORS.

// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project: project
//     }
// }

// WITH THUNK, WE CAN RETURN FUNCTIONS INSIDE THE RETURN OBJECT

export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {  //dispatch function to dispatch to reducer. getState to access the store's state. Destructuring the object to get "getFirebase" & "getFirestore"
        // make async call to database
        const firestore = getFirestore(); //creating reference
        const profile = getState().firebase.profile; //creating reference - accessing store state
        const authorId = getState().firebase.auth.uid; //creating reference - accessing store state



        firestore.collection('projects').add({  //This will go to our firestore database, find the "projects" collecton and add our new document.
            ...project, // spread operators - you could also type project.title and project.content. Basically spreads everything to it's individual properties.
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => { // ^ This is asynchronous, and returns "promise" until the task is done. It takes time for the document to be added so we use "then()" method to run the disptach after the task is completed.
            dispatch({type: 'CREATE_PROJECT', project: project}); //or just use 'project' because both have the same names.
        }) .catch((err) => { //catch() method will run if there is an error adding the data to our firestore database. It will stop the then() callback function and run the catch() callback function instead.
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })

    }
};