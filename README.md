# Bitespeedfinal-assignment

API:-  https://bitespeedfinal-assignment.onrender.com/identify

How to setup first of all we have to provide the mysql username and password in enviorment variable and the req body should look like this:
{
    "email": "test1",
    "phoneNumber": "1
}

and i have visited all the cases during the testing and made the arrangements according to all the test cases


The table schema to be constructed for testing:

{
	id                   Int                   
  phoneNumber          String?
  email                String?
  linkedId             Int? // the ID of another Contact linked to this one
  linkPrecedence       "secondary"|"primary" // "primary" if it's the first Contact in the link
  createdAt            DateTime              
  updatedAt            DateTime              
  deletedAt            DateTime?
}


The response should look like this:-
{
    "contact":{
        "primaryContatctId": number,
        "emails": string[], // first element being email of primary contact 
        "phoneNumbers": string[], // first element being phoneNumber of primary contact
        "secondaryContactIds": number[] // Array of all Contact IDs that are "secondary" to the primary contact
    }
}