import { Account, Client, Databases } from 'appwrite';

export const DATABASE_ID = '63f4894d0cded118c3cc'
export const USER_COLLECTION_ID = '63f4b1e71ab6c706db9e'
// const API_SECRET = '43b81184dd003b3f727ec0f7b6bbd1ddbd8a3a94c06b9411a0adc9d786a1ebce273fd0de8575f57dd9c328c2d64c5864108ce7cab94cb39aff4abbb4df019577326a14364e5185b747a418b33a92b6f04a8c1a4f77b1b9fe38277dd62c4b0c9eaff402e4cabc47a0807bfe49ddb1215f54d44089a11a85a81b5d7ee3cfb3fe54'
// Create an Appwrite client for connecting to the server.
const client = new Client();


// Assign the server's API endpoint and the project ID.
client
    .setEndpoint('https://localhost/v1')
    .setProject('63f48865996ba7168039')      

export const account = new Account(client);



// appwriteAccountPromise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });

export const database = new Databases(client);