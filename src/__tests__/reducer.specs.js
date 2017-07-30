import reducer from '../app/cart/Reducer'
import * as ActionTypes from '../app/cart/ActionTypes'


describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_ITEM', () => {
    expect(
      reducer([], {
        type: ActionTypes.ADD_ITEM_TO_CART,
        item: {
            id: 1,
            name: 'phone 1'
        }
      })
    ).toEqual([
      {
            id: 1,
            name: 'phone 1'
      }
    ])
    })
})