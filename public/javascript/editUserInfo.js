// Changing username is a simple push through and call the api/user/ 'put' route. After grabbing the id from the session.

// Changing password will require two requests ? one get request with the password, and checking if the current password matches the password in the db, and then another request of sending the update information through?