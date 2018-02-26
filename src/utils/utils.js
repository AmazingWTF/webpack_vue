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
  }
}
