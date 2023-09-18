const focusInput = document.getElementById('focusInput')
const focusMessage = document.getElementById('focusMessage')

// Обробник події "focusin"
// focusInput.addEventListener('focusin', () => {
//   focusMessage.textContent =
//     'Елемент отримав фокус (focusin)'
//   focusMessage.style.color = 'green'
// })

// Обробник події "focus"
focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Елемент отримав фокус (focus)'
  focusMessage.style.color = 'blue'
})

// Обробник події "blur"
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Елемент втратив фокус'
  focusMessage.style.color = 'red'
})

// Обробник події "focusout"
// focusInput.addEventListener('focusout', () => {
//   focusMessage.textContent =
//     'Елемент втратив фокус (focusout)'
//   focusMessage.style.color = 'orange'
// })

// document
//   .querySelector('.form__group')
//   .addEventListener('focusin', () => {
//     alert('focusin')
//   })

// document
//   .querySelector('.form__group')
//   .addEventListener('focusout', () => {
//     alert('focusout')
//   })

document
  .querySelector('.form__group')
  .addEventListener('blur', () => {
    alert('blur')
  })
