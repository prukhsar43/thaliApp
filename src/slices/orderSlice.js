import { createSlice } from "@reduxjs/toolkit";


const initialState={

    orederedItem:[],
    
}

export const orderSlice=createSlice({
      name:'thaliItem',
      initialState,
     
   
    reducers:{

        addItem:(state,action)=>{
          
            state.orederedItem.push(action.payload)
            alert("Item added in the cart")

        },

        removeItem:(state,action)=>{
          
            state.orederedItem.splice(action.payload,1)
            
        },

        removeQnty:(state,action)=>{

            state.orederedItem[action.payload].quantity = state.orederedItem[action.payload].quantity - 1  

        },

        addQnty:(state,action)=>{
         
            state.orederedItem[action.payload].quantity = state.orederedItem[action.payload].quantity + 1  
            console.log(state.orederedItem[action.payload].quantity)
            
        }


    }



})

export const {addItem,removeItem,removeQnty,addQnty}=orderSlice.actions
export default orderSlice.reducer