import { createSlice } from '@reduxjs/toolkit'


const basketSlice = createSlice({
  name: 'basket',
  initialState : { basket:[] },
  reducers: {
    checkBasket(state,action) {
      const found = state.basket.find((b) => b._id == action.payload._id)

      if (found) {
        found.quantity++
        return
      }

      state.basket.push({...action.payload,quantity:1})
    },
  },
})

export const { checkBasket } = basketSlice.actions
export default basketSlice.reducer