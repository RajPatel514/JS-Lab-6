
// Lab 6
//Simulate Data Fetching Using Promises

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Refractor With Async- Await
//Try...catch included in this function
async function fetchUserProf() {
    try {
        console.log('Retrieving User Profile Information.');
        await delay(2500);
        console.log('User profile has been fetched.');
    } catch (error) {
        console.error('Error fetching user profile:');
    }
}

async function fetchUserPost() {
    console.log('\nRetrieving User Posts.');
    await delay(3000);
    console.log('User posts have been fetched.');
}

//Error handling simulation. Used math.random to give a chance of failure
async function fetchUserCom() {
    console.log('\nRetrieving User Comments.');
    await delay(3000);
    if (Math.random() < 0.35) { //Fetching comments will fail 35% of the time
        console.error('ERROR RETRIEVING USER COMMENTS. PLEASE TRY AGAIN');
        return false;
    } else {
        console.log('User comments have been fetched.');
        await delay(1000);
        console.log('Thank you for your patience');
    }

}

//Sequential functions for fethcing user data
async function getSequentialContent() {
    await fetchUserProf();
    await fetchUserPost();
    await fetchUserCom();
}
getSequentialContent();

//Parallel Data fetching. Commented out to keep the console clear.
async function getParallelContent() {
    fetchUserProf();
    fetchUserPost();
    fetchUserCom();
}
// getParallelContent()


//Chaining Async Function
let promise = delay(10000);
promise.then(() => {
    console.log('\nRetrieving 2nd User Profile Information.');
    return delay(2000);
}).then(() => {
    console.log("Retrieving 2nd User Posts.");
    return delay(2000);
}).then(() => {
    console.log("Retrieving 2nd User Comments.");
    return delay(2000);
}).then(() => {
    console.log("Profile for 2nd user fetched");
    return delay(2000);
}).then(() => {
    console.log("Thank you for your patience.");
});


