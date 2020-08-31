export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase(); //creating reference

        firebase.auth().signInWithEmailAndPassword(   //We sign in the user using the "auth()" function and "signInWithEmailAndPassword()" method. 
            credentials.email,
            credentials.password
        ).then(() => {   // ^ This is asynchronous, and returns "promise" until the task is done. It takes time to sign in so we use "then()" method to run the disptach after the task is completed.
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {   //catch() method will run if there is an error signing in to the firebase auth ( Ex: like if the password is wrong or user doesn't exist). It will stop the then() callback function and run the catch() callback function instead.
            dispatch({ type: 'LOGIN_ERROR', err }); 
        });

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase(); //creating reference

        firebase.auth().signOut().then(() => {  //Signing out if you're signed in. This is asynchronous, and returns "promise" until the task is done. It takes time to sign out so we use "then()" method to run the disptach after the task is completed.
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}