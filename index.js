// LIVE CLOCK

// create "today" var for all other vars

const today = new Date();


// DATE SECTION


// create "year" var
const year = today.getFullYear();

// get month
const month = today.getMonth();
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// create day var
const day = today.getDay();
// create list of available days
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// get date and create oi parameters
let date = today.getDate();
let oi = today.getDate();
if (date === 1 || date === 21) {
  oi = `st`;
} else if (date === 2 || date === 22) {
  oi = `nd`;
} else if (date === 3 || date === 23) {
  oi = `rd`;
} else {
  oi = `th`;
}


// log full date
console.log(
  `Today's date is ${daylist[day]}, ${monthList[month]} ${date}${oi}, ${year}`
);





// CLOCK SECTION

// creat "hour" var
let hours = today.getHours();

// create "minute" var
let minutes = today.getMinutes();

// create "second" var
let seconds = today.getSeconds();

// create "prepand" var
let prepand = hours >= 12 ? "PM" : "AM";
hours = ((hours + 11) % 12) + 1;

/* create if statements to determine if it is noon or midnight
 else return the current time */

if (hours === 0 && prepand === "PM") {
  if (minutes === 0 && seconds === 0) {
    hours = 12;
    prepand = "Noon";
  } else {
    hours = 12;
    prepand = "PM";
  }
}

if (hours === 0 && prepand === "AM") {
  if (minutes === 0 && seconds === 0) {
    hours = 12;
    prepand = "Midnight";
  } else {
    hours = 12;
    prepand = "AM";
  }
}

console.log(
  `The current time is ${hours} : ${minutes} ${prepand} (${seconds} seconds)`
);

// print the final version to the console
