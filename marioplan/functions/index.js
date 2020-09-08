// FIREBASE CLOUD FUNCTIONS
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//   functions.logger.info("Hello logs!", {structuredData: true});

const functions = require('firebase-functions'); // creating reference via firebase package
const admin = require('firebase-admin');         // creating reference via firebase package
admin.initializeApp(functions.config().firebase) // Initializing the Admin SDK to interact with different services like the authentication and firestore services.
// ^ Passing some configuartion to initialize the app.
 exports.helloWorld = functions.https.onRequest((request, response) => {

   response.send("Hello, Shameel!");
 });

 const createNotification = (notification => {
   return admin.firestore().collection('notifications')
   .add(notification)
   .then(doc => console.log('notification added', doc));
 }) // Create a document of the 'notification' object in the notification collecton on firestore.

 exports.projectCreated = functions.firestore
 .document('projects/{projectId}')
 .onCreate(doc => {

  const project = doc.data(); //Referencing the data using the 'data()' method.
  const notification = {
    content: ' added a new project',
    user: `${project.authorFirstName} ${project.authorLastName}`, //template syntax : ``
    time: admin.firestore.FieldValue.serverTimestamp() // Get a timestamp from the server for us.
  }

  return createNotification(notification); // Invoking function and sending the 'notification' object as an argument.

 }); // When a new project is added to the 'projects' collection, a callback function is triggered.

 exports.userJoined = functions.auth.user()
 .onCreate(user => {

  // CREATING REFERENCE WITH THE USERS COLLECTION TO GET FIRST AND LAST NAME. (AUTH AND USERS COLLECTION HAVE THE SAME UID)
  return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {  // 'get()' is asynchronous, it takes time to retrieve data so we 'then()' method.
      
      const newUser = doc.data(); //Referencing the data using the 'data()' method.
      const notification = {
        content: ' joined the party',
        user: `${newUser.firstName} ${newUser.lastName}`, //template syntax : ``
        time: admin.firestore.FieldValue.serverTimestamp() // Get a timestamp from the server for us.
      }

      return createNotification(notification); // Invoking function and sending the 'notification' object as an argument.

    })

 }); // When a new user is created using the auth service, a callback function is triggered.

