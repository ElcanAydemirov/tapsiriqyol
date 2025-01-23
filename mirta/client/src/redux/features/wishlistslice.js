import { createSlice } from '@reduxjs/toolkit'


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState : { wishlist:[] },
  reducers: {
    checkWishlist(state,action) {
      const found = state.wishlist.find((w) => w._id == action.payload._id)

      if (found) {
        state.wishlist = state.wishlist.filter((w) => w._id != action.payload._id)
        return
      }

      state.wishlist.push({...action.payload})
    },
  },
})

export const { checkWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer