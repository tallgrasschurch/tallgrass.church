//
// Tallgrass Community Church
// --------------------------------------------------


// Initialization
// -------------------------

// Remove .no-js class to indicate JavaScript is enabled (the .js class is added by Drupal)
document.documentElement.classList.remove('no-js')


// Media group
// -------------------------

// Process all media group items
var mediaGroup = document.querySelectorAll('.media-group')
mediaGroup.forEach( function(group) {

  // Get the headings
  var headings = group.querySelectorAll('.field__label')

  // Create the media group nav element
  var navElement = document.createElement('ul')
  navElement.classList.add('media-group__nav')

  // Create the nav items
  headings.forEach( function(heading, i) {

    // Add the heading item to the nav
    var navItem = document.createElement('li')
    if (i === 0) {
      navItem.classList.add('is-active')
    }
    var navItemBtn = document.createElement('button')
    navItemBtn.setAttribute('type', 'button')
    navItemBtn.appendChild(document.createTextNode(heading.textContent))
    navItem.appendChild(navItemBtn)
    navElement.appendChild(navItem)

    // Hide the heading
    heading.style.display = 'none'
  })

  // Insert the nav
  group.insertBefore(navElement, group.firstChild)

  // Hide all sections other than the first
  var sections = group.querySelectorAll('.field')
  sections.forEach( function(section, i) {
    if (i !== 0) {
      section.style.display = 'none'
    }
  })

  // Handle nav items
  var nav = group.querySelectorAll('.media-group__nav')
  var navItems = nav[0].querySelectorAll('li')
  navItems.forEach( function(item, i) {
    var btn = item.querySelectorAll('button')
    btn[0].addEventListener('click', function() {

      // Cancel function if the item is currently active
      if (item.classList.contains('is-active')) {
        return
      }

      // Make this button active
      nav[0].querySelectorAll('.is-active')[0].classList.remove('is-active')
      item.classList.add('is-active')

      // Hide all sections
      sections.forEach( function(section, i) {
        section.style.display = 'none'
      })

      // Show the proper section content
      sections[i].style.display = 'block'
    })
  })
})
