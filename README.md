# FriendFinder
FriendFinder takes in a user's response to a short survey and matches them to a compatable friend already in the database according to their results. This is all part of a homework assignment for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to March 2020).

## FriendFinder Functionality
FriendFinder's landing page with a Jumbotron stating its name, giving a by-line of "Find your next good friend!" and a button which upon selection brings a user to the survey form. The page footer includes a link to the API Friends List of all data for friends to match between in JSON format and a link to this GitHub Repository.

The API Friends List should update after each successful submit of the filled out survey until such a time that the server is restarted.

Upon selecting the "Go to Survey" button, users will be taken to the survey page. The form on this page will require a **Name**, link to a **Photo** of some kind, and ten questions which request a selection of how much the user agrees or disagrees with the statement of the question. 1 ranks as Highly Disagreeing, 5 ranks as Highly Agreeing.

If a user doesn't fill in all fields and make a selection on all questions, they'll be shown a modal with a sad face and a reminder: ``Please make sure to fill out all fields completely!``

Upon successful submission of the survey form, a user will be shown a modal pairing them with a compatable friend. They'll be shown that individual's name and an image as was provided to the survey form. For the case of this project, there are ten initial "friends" in the data array, with images served internally. Selecting outside the modal, or selecting the "x" or "Close" button, closes the modal.

## FriendFinder Calculations
Matches between a form submission and the values currently in the friends data array are determined by taking the absolute value of the difference between each score by the user, compared index by index to each data object scores in the friends data array. Scores are the numerical values assigned by the user to each question on the form.

Once those absolute value differences have been generated between the user's survey and each object in the friends data array, those values are summed. Those sums are compared to a variable tracking the lowest summed number. If that sum is smaller than the variable being tracked, that variable is updated to the sum, and the index of the friends data array object that sum derives from is pushed into an empty array.

Each time the sum is smaller than the tracked variable, the array is cleared, and that new lowest sum's index is pushed into the array. If a sum is equal to the variable being tracked, then the index of the object from where that sum is derived is also pushed into the array.

Once all objects of the friends data array have been looped through, the array holding one or more indexes of those objects from that array is examined. If the array has a length of one, that value is taken from index[0] and passed through a function to pull its corresponding object information out of the friends data array. If the array has a length greater than one, a random number is generated between 0 and the length of the array before being returned and passed through a function to pull its corresponding object information out of the friends data array.

A response is sent containing that information, and then a modal is populated with the name and photo associated with that data object and displayed to the user.

## FriendFinder Depedencies
* express
* path

## FriendFinder Languages
* CSS
* HTML
* JavaScript

## FriendFinder Libraries
* Bootstrap
* FontAwesome
* jQuery

## FriendFinder Stretch Goals
* Proper validation to strip quotation marks out of name inputs.
* Tighten and dry code and improve UI experience.