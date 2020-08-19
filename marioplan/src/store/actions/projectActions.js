// ACTION CREATORS - COMES IN HANDY WHEN DEALING WITH A LOT OF DIPATCHES

// WHAT WE NORMALLY DO WITH ACTION CREATORS.

// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project: project
//     }
// }

// WITH THUNK, WE CAN RETURN FUNCTIONS INSIDE THE RETURN OBJECT

export const createProject = (project) => {
    return(dispatch, getState) => {  //dispatch function to dispatch to reducer. getState to access the store's state.
        // make async call to database
        dispatch({type: 'CREATE_PROJECT', project: project}); //or just use 'project' because both have the same names.
    }
};
