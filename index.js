function asyncHandler (asyncFunc) {
  return function (...args) {
      return Promise.resolve(asyncFunc.apply(this, args))
      .catch(err => {
          console.error.bind(console, err)
      })
  }
}

module.exports = asyncHandler
