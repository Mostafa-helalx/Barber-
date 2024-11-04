onload = function () {
  const prices = document.querySelectorAll('.price')
  const menu = this.document.querySelector('#menu-toggle')
  const navBar = document.querySelector('.show')
  let i = 0
  function startInterval () {
    const interval = setInterval(function () {
      for (let j = 0; j < prices.length; j++) {
        prices[j].innerText = i
      }
      i++
      if (i > 20) {
        clearInterval(interval)
        i = 0
        setTimeout(startInterval, 3000)
      }
    }, 150)
  }
  startInterval()

  menu.addEventListener('click', function () {
    navBar.classList.toggle('show')
  })
}
