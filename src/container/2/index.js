const input = document.querySelector('.form__input')
const error = document.querySelector('.form__error')

const data = {}

// Обробник події "change"
input.addEventListener('change', (event) => {
  if (event.target.value === '') {
    error.textContent = 'Введіть дані в поле'
  } else {
    error.textContent = ''
  }

  console.log(event)
  alert(event.target.value)

  data[event.target.name] = event.target.value

  console.log('data', data)
})
