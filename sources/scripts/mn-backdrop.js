document.addEventListener('keyup', hideBackdrop)
console.log('keyup?')
function hideBackdrop(event) {
  console.log('keyup')
  const esc = event.key === 'Escape'
  let backdropVisible = document.body.classList.contains('mn-backdrop-visible')

  if (esc && backdropVisible) {
    document.body.classList.remove('mn-backdrop-visible')
  }
}
