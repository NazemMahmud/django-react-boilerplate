/**
 * the request to create a new user was send and waiting for server response. 
 * After this action is dispatched, should disable Signup button till server response.
 */
export const CREATE_USER_SUBMITTED = "CREATE_USER_SUBMITTED";
/**
 * the is called after HTTP 201 CREATED response, means that user was successfully created.
 */
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
/**
 * the is called when there was an error during creation of user and not created.
 */
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";