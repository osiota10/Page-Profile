const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const currentTime = document.querySelector('[data-testid="currentUTCTime"]')



const time = setInterval(
    function currentDate() {
        const date = new Date()
        const hour = date.getUTCHours()
        const minute = date.getUTCMinutes()
        const second = date.getUTCSeconds()


        // Define an array of day names
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
        const currentDayOfWeek = date.getUTCDay();

        // Get the name of the current day
        const currentDayName = dayNames[currentDayOfWeek];


        currentDay.textContent = currentDayName
        currentTime.textContent = `${hour} : ${minute} : ${second} UTC`
    }, 1000
);

// function updateDateTime() {
//     currentDay.innerHTML = date.getUTCDay()
//     currentTime.textContent = date.getMinutes()
//     // // Get a reference to the elements by their data-testid attributes
//     // const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
//     // const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

//     // // Create a Date object to get the current date and time
//     // const currentDate = new Date();

//     // // Set the current day of the week
//     // const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     // const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
//     // currentDayElement.textContent = currentDayOfWeek;

//     // // Set the current UTC time
//     // const currentUTCTime = currentDate.toISOString().split('T')[1].slice(0, 8);
//     // currentUTCTimeElement.textContent = currentUTCTime + " UTC";
// }

// // Update date and time immediately and then every second
// updateDateTime();
// setInterval(updateDateTime, 1000); // Update every 1 second