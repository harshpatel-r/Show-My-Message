
// Get the scrolling message element
const scrollingMessage = document.getElementById("scrolling-message");

// Function to update the scrolling message
function updateMessage(message) {
  scrollingMessage.textContent = message;
}

// Example usage
const lastMessage = `Day 41 to 45 of my #100DaysOfCode!
Apologies for the delay, but here's a recap of my past 5 days :
I focused on algorithms daily, actively applying to organizations for job opportunities.📝 I dedicated time to absorbing new programming concepts. Sundays were reserved for rest.😊`; // message length doesn't have any limit
updateMessage(lastMessage); // Replace with your logic to retrieve and update the last message dynamically

const dropdownContainer = document.getElementById("dropdownContainer");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.querySelector(".dropdown-menu");

let dropdownTimeout;

function showDropdownMenu() {
  clearTimeout(dropdownTimeout);
  dropdownMenu.style.display = "block";
}

function hideDropdownMenu() {
  dropdownTimeout = setTimeout(function () {
    dropdownMenu.style.display = "none";
  }, 100);
}

dropdownContainer.addEventListener("mouseenter", showDropdownMenu);
dropdownContainer.addEventListener("mouseleave", hideDropdownMenu);

// // Get the scrolling message element
// const scrollingMessage = document.getElementById("scrolling-message");
// const showMessage = document.getElementById("show-message"); 
// // Function to update the scrolling message
// const updateMessage = async () => {
//   scrollingMessage.textContent = "Loading...";
// try{
//     const response = await axios('http://localhost:3000/messages');

//     const message = response.data
    
//     console.log("message :",  message);

//     scrollingMessage.textContent = message[0].message
// }catch (errors) {
//   console.error(errors);
// }

// }
// updateMessage()

// // Make a request for a user with a given ID
// // axios.get('/messages')
// //   .then(function (response) {
// //     // handle success
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     // handle error
// //     console.log(error);
// //   })
// //   .finally(function () {
// //     // always executed
// //   });
// // // Example usage
// const lastMessage = `Day 41 to 45 of my #100DaysOfCode!
// Apologies for the delay, but here's a recap of my past 5 days :
// I focused on algorithms daily, actively applying to organizations for job opportunities.📝 I dedicated time to absorbing new programming concepts. Sundays were reserved for rest.😊`; // message length doesn't have any limit
// // updateMessage(lastMessage); // Replace with your logic to retrieve and update the last message dynamically


