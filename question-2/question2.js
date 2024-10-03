// Created by Adam Simcoe
// Last Updated October 3rd 2024

/* Question 2 - Create a method resolvedPromise that is similar to delayedSuccess and 
   resolves a message after a timeout of 500ms. Create a method rejectedPromise that is 
   similar to delayedException and rejects an error message after a timeout of 500ms. 
   Call both promises separately and handle the resolves and reject results and then output to the console. */

 class PromiseHandlers {

    resolvedPromise() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({'message': 'Resolved promise in 500ms.'})
            }, 500);
        });
    }

    rejectedPromise() {
        return new Promise((reject) => {
            setTimeout(() => {
                reject({ error: 'Rejected promise in 500ms.'});
            }, 500);
        }); 
    }
 }

 const handler = new PromiseHandlers();

 handler.resolvedPromise()
    .then(output => console.log(output))
    .catch(err => console.error(err));

 handler.rejectedPromise()
    .then(output => console.log(output))
    .catch(err => console.error(err));