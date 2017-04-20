class MnBackdrop {
  static show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }

  static get isVisible() {
    return document.body.classList.contains('mn-backdrop-visible')
  }
}

window.MnBackdrop = MnBackdrop
document.addEventListener('keyup', escape)

function escape(event) {
  const esc = event.key === 'Escape'

  if (esc && MnBackdrop.isVisible) {
    MnBackdrop.hide()
  }
}
