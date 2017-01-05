class MnBackdrop {
  static show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }
}

window.MnBackdrop = MnBackdrop
document.addEventListener('keyup', escape)

function escape() {
  const esc = event.key === 'Escape'
  const backdropVisible = document.body.classList.contains('mn-backdrop-visible')

  if (esc && backdropVisible) {
    MnBackdrop.hide()
  }
}
