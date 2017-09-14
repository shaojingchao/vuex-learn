const _products = [{
      id: 1,
      name: '小米5 (白色) 4 + 64',
      price: 1499,
      stock: 1
    }, {
      id: 2,
      name: '小米6 (黑色) 6 + 64',
      price: 2499,
      stock: 2
    }, {
      id: 3,
      name: '电池',
      price: 9.9,
      stock: 9
    }, {
      id: 4,
      name: '小米圈铁耳机 （铁灰色）',
      price: 99,
      stock: 2
    }]

export default {
  getProducts (cb) {
    setTimeout(() => {
      cb(_products)
    }, (Math.random() + 0.1) * 500)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5)
        ? cb()
        : errorCb()
    }, 100)
  }
}