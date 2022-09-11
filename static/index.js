window.addEventListener('load', () => {
  window.scrollTo(0,0)
})

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset
  const containerLeft = document.querySelector('#containerLeft')
  const containerRight = document.querySelector('#containerRight')
  const nav = document.querySelector('nav')
  const loader = document.querySelector('.loader')

  let i = 130 - (scrollPosition / 111.14923095703125) * 100

  if (window.location.pathname === '/') {
    containerLeft.style.opacity = `${i}%`
    containerRight.style.opacity = `${i}%`
    containerLeft.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)'
    containerRight.style.transform = 'translateY(' + scrollPosition * 0.7 + 'px)'
    nav.style.opacity = `${i-20}%`
    loader.style.opacity = `${(scrollPosition / 111.14923095703125) * 90}%`
    loader.style.width = `${(scrollPosition / 111.14923095703125) * 20 + 68}vw`
  
  }

  const knowMe = document.querySelector('.knowMe')
  const title = document.querySelector('.title')
  const stickMe = document.querySelector('.stickMe')
  if (window.location.pathname === '/about') {
    title.style.opacity = `${i}%`
    knowMe.style.opacity = `${i}%`
    title.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)'
    knowMe.style.transform = 'translateY(' + scrollPosition + 400 * -0.2 + 'px)'
  
    if (window.pageYOffset >= 820) {
        stickMe.style.position = 'fixed'
        stickMe.style.top = '6%' 
        stickMe.style.left = `20%`
    } else {
      stickMe.style.position = 'absolute'
      stickMe.style.top = '105%'
      stickMe.style.left = `40%`
    }
  }
})
