/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey:  'keyHlsLDLGZl66goP' }).base(
    'app09dEK6VxVI6SJN'
  );

// get our collection base, select all the records
// specify functions that will receive the data
base("strawhat_pirates")
  .select({})
  .eachPage(gotPageOfMembers, gotAllMembers);

  // an empty array to hold our data
const members = [];

// callback function that receives our data
function gotPageOfMembers(records, fetchNextPage) {
    console.log("gotPageOfMembers()");
    // add the records from this page to our array
    members.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllMembers(err) {
    console.log("gotAllMembers()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

    // call functions to log and show
    consoleLogMembers();
    showMembers();

    // just loop through the books and console.log them
function consoleLogMembers()
{ console.log("consoleLogMembers()"); 
members.forEach((member) =>{console.log("Name:", member);});
}

// loop through the data, create an element for each one, and add it to the page
function showMembers() {
    console.log("showMembers()");
    members.forEach((member) => {

          // create container for each song
    var memberContainer = document.createElement("div");
    memberContainer.classList.add("member-container");
    document.querySelector(".container").append(memberContainer);

        var memberName = document.createElement("h2");
        memberName.classList.add("member-name");
        memberName.innerText = member.fields.name;
        memberContainer.append(memberName);

        var memberIdentity = document.createElement("h2");
        memberIdentity.classList.add("member-identity");
        memberIdentity.innerText = member.fields.role_identity;
        memberContainer.append(memberIdentity);

        var memberDescription = document.createElement("p");
        memberDescription.classList.add("member-description");
        memberDescription.innerText = member.fields.description;
        memberContainer.append(memberDescription);

        var memberImage = document.createElement("img");
        memberImage.classList.add("member-image");
        memberImage.src = member.fields.image[0].url;
        memberContainer.append(memberImage);

            // add event listener to add active class to member container
        memberContainer.addEventListener("click", function(event) {
        memberDescription.classList.toggle("active");
        memberImage.classList.toggle("active");
        memberIdentity.classList.toggle("active");
      });
     
    });
  }
}