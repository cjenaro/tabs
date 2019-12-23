const tabs = document.querySelector('.tabs')
const buttons = tabs.querySelectorAll('[role="tab"]')
const panels = tabs.querySelectorAll('[role="tabpanel"]')

function handleTabChange(e) {
  buttons.forEach(btn => {
    btn.setAttribute('aria-selected', e.currentTarget.id === btn.id)
  })

  panels.forEach(panel => panel.hidden = e.currentTarget.id !== panel.getAttribute('aria-labelledby'))
}

buttons.forEach(button => {
  button.addEventListener('click', handleTabChange)
})