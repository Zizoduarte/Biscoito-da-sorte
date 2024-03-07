
const Cookie = {
  firstScreen: document.querySelector('.screen1'),
  secondScreen: document.querySelector('.screen2'),
  cookieLuck: document.querySelector('.cookie-luck'),
  buttonBackOnPage: document.querySelector('.button-open'),

  openCookie(){
    Cookie.firstScreen.classList.add('hide')
    Cookie.secondScreen.classList.remove('hide')
  },

  closeCookie(){
    Cookie.secondScreen.classList.add('hide')
    Cookie.firstScreen.classList.remove('hide')
  }
}

Cookie.cookieLuck.addEventListener('click', cookieOpen)
Cookie.buttonBackOnPage.addEventListener('click', backPage)

function cookieOpen(){
  Cookie.openCookie()
}

function backPage(){
  Cookie.closeCookie()
}