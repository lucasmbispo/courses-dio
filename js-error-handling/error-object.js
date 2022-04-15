// All the parameters are optional
// The parameteres are not valid in all browsers
// Usually applied only with the message

new Error(message, fileName, lineNumber)
MyError.name='InvalidMessage';
const MyError = new Error('Invalid Message');
throw MyError;

MyError.name

MyError.stack

MyError