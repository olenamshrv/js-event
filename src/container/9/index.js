const visibilityStatus = document.getElementById(
  'visibilityStatus',
)

// Обробник події "visibilitychange"
document.addEventListener('visibilitychange', (e) => {
  console.log(e)

  if (document.hidden) {
    visibilityStatus.textContent =
      'Статус видимості: Приховано'

    document.body.style.background = 'red'

    alert('Стан видимості: Приховано')
  } else {
    visibilityStatus.textContent =
      'Статус видимості: Відображено'

    document.body.style.background = 'green'
    alert('Стан видимості: Відображено')
  }
})

// Обробник події "orientationchange"
window.addEventListener('orientationchange', (e) => {
  console.log(e)

  const orientation = window.screen.orientation
  alert(`Змінено орієнтацію на: ${orientation}`)
})
