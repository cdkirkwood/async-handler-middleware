Simple middleware based on express-async-handler. This package is meant to be used on the front-end. It handles exceptions inside of asynchronus functions and logs them to the console.

Installation

npm install async-handler-middleware

Usage:

An example of async-handler-middleware being used inside a thunk.

import asyncHandler from 'async-handler-middleware'

export const fetchProducts = () => asyncHandler(async (dispatch) => {
  const response = await axios.get('/api/products')
  dispatch(getProducts(response.data))
})