const changeStateButton =
  document.querySelector('.form__button')

// Додати обробник події "click" для кнопки
changeStateButton.addEventListener('click', () => {
  // const newState = { message: 'Новий стан' }

  const newState = { message: new Date().getTime() }

  history.pushState(newState, 'New Page', '/popstate#test')

  console.log('Стан змінено:', newState)
})

// Додати обробник події "popstate" для відстеження змін у стеку історії
window.addEventListener('popstate', (event) => {
  console.log(event)
  console.log(event.state)
})
