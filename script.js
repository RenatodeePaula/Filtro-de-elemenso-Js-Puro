// get filter element
let filter = document.querySelector('input')
// get cards elements
let cards = document.querySelectorAll('.cards .card')
// add input event for the filter element
filter.addEventListener('input', filterFunction)
// filter function
function filterFunction () {
  // if the filter is not empty
  if (filter.value != '') {
    // for each card of cards
    for (let card of cards) {
      // get card heading (title)
      let title = card.querySelector('h2')
      // tranform to lower case
      title = title.textContent.toLowerCase()
      // transform filter text to lower case
      let filterText = filter.value.toLowerCase()
      // if card title does not include the filter text
      if (!title.includes(filterText)) {
        // hide the card element
        card.style.display = 'none'

      } else{
        card.style.display = 'block'

      }
      // unhide the card element
    }    

  } else {
    for (let card of cards) {
      card.style.display = 'block'

    }

   

  }
  
}

      
  // else
    // for each card of cards
      // unhide the card element    cards.style.background = 'blue'