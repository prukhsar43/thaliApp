import {configureStore} from '@reduxjs/toolkit'
import orderSlice from '../slices/orderSlice'
import thaliSlice from '../slices/thaliSlice'

export const store=configureStore({

    reducer:{
          orderSlice:orderSlice,
          thaliSlice:thaliSlice

    }
})