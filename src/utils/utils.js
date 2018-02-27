module.exports = {
  // processing SessionStorage
  setSessionStorage (obj) {
    if ((obj instanceof Object) && !(obj instanceof Array)) {
      for (let k in obj) {
        sessionStorage.setItem(k, obj[k])
      }
    } else {
      console.warn('function setSessionStorage\'s params must be an object')
    }
  },
  removeSessionStorage (obj) {
    if (obj instanceof Array) {
      obj.forEach(v => {
        sessionStorage.removeItem(v)
      })
    } else if (obj instanceof String) {
      sessionStorage.removeItem(obj)
    } else if (obj === undefined) {
      sessionStorage.clear()
    } else {
      console.warn('function setSessionStorage\'s params must be an array or a string')
    }
  },
  // processing LocalStorage
  setLocalStorage (obj) {
    if ((obj instanceof Object) && !(obj instanceof Array)) {
      for (let k in obj) {
        localStorage.setItem(k, obj[k])
      }
    } else {
      console.warn('function setLocalStorage\'s params must be an object')
    }
  },
  removeLocalStorage (obj) {
    console.log('removeLocalStorage: ', obj)
    if (obj instanceof Array) {
      obj.forEach(v => {
        localStorage.removeItem(v)
      })
    } else if (obj instanceof String) {
      localStorage.removeItem(obj)
    } else if (obj === undefined) {
      localStorage.clear()
    } else {
      console.warn('function setLocalStorage\'s params must be an array or a string')
    }
  }

}
