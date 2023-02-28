// get filter element
let input = document.querySelector('input')

// get cards elements
let cards = document.querySelectorAll('.cards .card')

// add input event for the filter element
input.addEventListener('input', filterFunction)

// filter function
function filterFunction () {
    // if the filter is not empty
    if (!input.value == "") {
        // for each card of cards
        for (let card of cards) {
            // get card heading (title)
            let title = document.querySelector('.card h2')
            // tranform to lower case
            title = title.textContent.toLowerCase()
            // transform filter text to lower case
            let filterInput = input.value.toLowerCase()
            // if card title does not include the filter text
            console.log(title)

            // if (!title.includes(filterInput)) {
            //     // hide the card element
            //     card.style.display = 'none'


            // } else {
            //     card.style.display = 'block'

            // }
             

        }
       

    }


}
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element