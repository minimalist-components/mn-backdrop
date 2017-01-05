document.addEventListener('keyup', hideBackdrop)

function hideBackdrop(event) {
  const esc = event.key === 'Escape'
  let backdropVisible = document.body.classList.contains('mn-backdrop-visible')

  if (esc && backdropVisible) {
    document.body.classList.remove('mn-backdrop-visible')
  }
}
