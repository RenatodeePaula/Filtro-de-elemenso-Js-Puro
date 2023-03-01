// get filter element
let filter = document.querySelector('input')
// get cards elements
let cards = document.querySelectorAll('.cards', '.card')
// add input event for the filter element
filter.addEventListener('input', filterFunction)
// filter function
function filterFunction () {
  // if the filter is not empty
  if (filter.value != '') {
    // for each card of cards
    for (let card of cards) {
      // get card heading (title)
      let title = document.querySelector('h2')
      // tranform to lower case
      title.textContent.toLowerCase()
      // transform filter text to lower case
     

      }
    

  } else {
   

  }
  
}

      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element    cards.style.background = 'blue'